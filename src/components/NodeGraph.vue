<style>
#sketch {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
}
</style>

<template>
    <div id="sketch">

    </div>
</template>

<script>
//import p5vue from 'p5vue';
import p5 from 'p5';
import Discipline from '../models/Discipline';
import Project from '../models/Project';

var noNodes = 100;
var noConn = 50;
var gravityConstant = 1.1;
var forceConstant = 1000;
var physics = true;

var nodes = [];
var nodeCon = [];
var clicked = false;
var lerpValue = 0.2;
var startDisMultiplier = 10;
var closeNode;
var closeNodeMag;

let sketch = (p) => {
    p.setup = function () {
        let container = p.canvas.parentElement;

        //let dimensions = this.sketchElement.getBoundingClientRect();
        p.createCanvas(container.offsetWidth, container.offsetHeight);
        p.background('#FF00FF');
        for (let i = 0; i < noNodes; i++) {
            let x = p.random(-startDisMultiplier * p.width, startDisMultiplier * p.width)
            let y = p.random(-startDisMultiplier * p.height, startDisMultiplier * p.height)
            let node = new Node(p.createVector(x, y), p.random(1, 5))
            nodes.push(node);
        }
        closeNode = nodes[0]
        for (let n = 0; n < noConn; n++) {
            nodeCon.push([
                p.round(p.random(noNodes - 1)),
                p.round(p.random(noNodes - 1)),
                p.random(100, 300)
            ])
        }
        nodeCon.push([0, 1, 200])

        // lets add a connection from all solo nodes for good measure

        let connected = new Set()
        nodeCon.forEach(conn => {
            connected.add(conn[0])
            connected.add(conn[1])
        })

        for (let n = 0; n < noNodes; n++) {
            if (!connected.has(n)) {
                nodeCon.push([
                    n,
                    p.round(p.random(noNodes - 1)),
                    p.random(100, 300)
                ]
                )
            }
        }
    }

    p.draw = function () {
        p.translate(p.width / 2, p.height / 2)
        p.background(0);
        p.fill(255)
        p.stroke(255)
        nodeCon.forEach(con => {
            let node1 = nodes[con[0]]
            let node2 = nodes[con[1]]
            p.line(node1.pos.x, node1.pos.y,
                node2.pos.x, node2.pos.y)
        })
        applyForces(nodes)
        nodes.forEach(node => {
            node.draw()
            if (physics) {
                node.update()
            }
        })
        if (clicked == true) {
            let mousePos = p.createVector(p.mouseX - p.width / 2, p.mouseY - p.height / 2)
            closeNode.pos.lerp(mousePos, lerpValue)
            if (lerpValue < 0.95) {
                lerpValue += 0.02;
            }
        }
    }

    function applyForces(nodes) {

        // apply force towards centre
        nodes.forEach(node => {
            let gravity = node.pos.copy().mult(-1).mult(gravityConstant)
            node.force = gravity
        })

        // apply repulsive force between nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                let pos = nodes[i].pos
                let dir = nodes[j].pos.copy().sub(pos)
                let force = dir.div(dir.mag() * dir.mag())
                force.mult(forceConstant)
                nodes[i].force.add(force.copy().mult(-1))
                nodes[j].force.add(force)
            }
        }

        // apply forces applied by connections
        nodeCon.forEach(con => {
            let node1 = nodes[con[0]]
            let node2 = nodes[con[1]]
            let maxDis = con[2]
            let dis = node1.pos.copy().sub(node2.pos)
            let diff = dis.mag() - maxDis
            node1.force.sub(dis)
            node2.force.add(dis)
        })

        p.touchStarted = function() {
            clicked = true
            let mousePos = p.createVector(p.mouseX - p.width / 2, p.mouseY - p.height / 2)
            nodes.forEach((node) => {
                if (mousePos.copy().sub(node.pos).mag() - closeNode.mass / (2 * p.PI) < mousePos.copy().sub(closeNode.pos).mag() - closeNode.mass / (2 * p.PI))
                    closeNode = node;
            })
        }

        p.touchEnded = function() {
            clicked = false
            lerpValue = 0.2
        }
    }

    class Node {
        constructor(pos, size) {
            this.pos = pos;
            this.force = p.createVector(0, 0);
            this.mass = (2 * p.PI * size) / 1.5;
            this.fs = [];
        }

        update() {
            let force = this.force.copy();
            let vel = force.copy().div(this.mass);
            this.pos.add(vel);
        }

        draw() {
            p.ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
        }
    }
}


export default {
    name: 'NodeGraphView',
    components: {

    },
    methods: {
        async initSketch() {
            this.sketchElement = document.getElementById('sketch');
            this.sketch = new p5(sketch, this.sketchElement);
        },
        async initData() {
            this.projects = Project.all;
            this.disciplines = Discipline.all;
        },
        methodThatForcesUpdate() {
            this.$forceUpdate();  // Notice we have to use a $ here
        }
    },
    mounted() {
        //console.log('NodeGraphView mounted');
        this.initSketch();
        this.initData();
    }
}
</script>