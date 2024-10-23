import Project from '../models/Project';
import Discipline from '../models/Discipline';
import router from '../router';


class Node {

    constructor(pos, size, p, item = null) {
        let node = this;
        this.p = p;
        this.pos = pos;
        this.size = size;
        this.item = item;
        this.title = "Node";
        this.force = p.createVector(0, 0);
        this.mass = (2 * p.PI * size) / 1.5;

        Node.all.push(this);

        if(item instanceof Project){
            this.title = item.title;
            if(item.imageurl != "" && item.imageurl != null){
                p.loadImage(item.imageurl, function (img){
                    img.resize(100,100);
                    node.img = img;
                });
            }
            this.url = router.resolve({ name: 'project', params: { id: node.item.shortname } });    
            
            Node.highPriority.push(this);
        }else if(item instanceof Discipline){
            this.title = item.name;
            if(item.imageurl != "" && item.imageurl != null){
                p.loadImage(item.imageurl, function (img){
                    img.resize(100,100);
                    node.img = img;
                });
            }
            node.url = router.resolve({ name: 'discipline', params: { id: node.item.shortname } });

            Node.lowPriority.push(this);
        }
        //console.log(this.img);
        
    }

    update() {
        let force = this.force.copy();
        let vel = force.copy().div(this.mass);
        this.pos.add(vel);
    }

    draw() {
        // let g = Node.graphic;
        this.p.push();
        if(this.item instanceof Project){
            this.p.fill(255);
            this.p.stroke(255)
        }else if(this.item instanceof Discipline){
            this.p.fill(180);
            this.p.stroke(180);
        }
        
        this.p.strokeWeight(3);
        if(this.img != null){
            this.p.texture(this.img);
        }
        this.p.ellipse(this.pos.x, this.pos.y, this.mass, this.mass);

        // Draw the name
        //this.p.fill(255);
        // this.p.stroke(255);
        this.p.strokeWeight(4);

        // this.p.point(this.pos.x + this.mass / 2 + 8, this.pos.y + 8);
        this.p.pop();
    }

    drawText(){
        let g = Node.graphic;
        g.push();
        g.strokeWeight(3);
        if(this.item instanceof Project){
            g.stroke(0);
            g.fill(255)
            g.textSize(18);

            g.textAlign(this.p.CENTER, this.p.TOP);
            g.text(this.title, this.pos.x, this.pos.y + this.mass / 2 + 8);

        }else if(this.item instanceof Discipline){
            g.stroke(0);
            g.fill(180);
            g.textSize(14);

            g.textAlign(this.p.LEFT, this.p.CENTER);
            g.text(this.title, this.pos.x + this.mass / 2 + 8, this.pos.y);
        }
        
        g.pop();
    }

    clicked(){
        console.log("Clicked on " + this.title);
        console.log(this.url);

        console.log(router);
        window.open(this.url.href, '_blank');
        // router.push(this.url);
        
    }

    static all = [];
    static lowPriority = [];
    static highPriority = [];
    static connections = [];
    static startDisMultiplier = 10;
    static gravityConstant = 1.1;
    static forceConstant = 1000;
    static graphic;

    static initialize(p, sketch){
        Node.all = [];
        Node.lowPriority = [];
        Node.highPriority = [];
        Node.sketch = sketch;
        let projects = Project.all;
        let disciplines = Discipline.all;

        for(let project of projects){
            let x = p.random(-Node.startDisMultiplier * p.width, Node.startDisMultiplier * p.width)
            let y = p.random(-Node.startDisMultiplier * p.height, Node.startDisMultiplier * p.height)
            let node = new Node(p.createVector(x, y), 8, p, project)
        }

        for(let discipline of disciplines){
            let x = p.random(-Node.startDisMultiplier * p.width, Node.startDisMultiplier * p.width)
            let y = p.random(-Node.startDisMultiplier * p.height, Node.startDisMultiplier * p.height)
            let node = new Node(p.createVector(x, y), 5, p, discipline)
        }

        for(let project of projects){
            let node1 = Node.findNodeByItem(project);
            for (let discipline of project.disciplines){
                let node2 = Node.findNodeByItem(discipline);
                if(node1 != null && node2 != null){
                    Node.connections.push([Node.all.indexOf(node1), Node.all.indexOf(node2), 150]);
                }
            }
        }
    }

    static findNodeByItem(item){
        for(let node of Node.all){
            if(node.item === item){
                return node;
            }
        }
        return null;
    }

    static applyForces(p) {

        let nodes = Node.all;

        // apply force towards centre

        for (let node of nodes) {
            let force = node.pos.copy().mult(-1).mult(Node.gravityConstant)
            node.force = force
        }

        // apply repulsive force between nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                let pos = nodes[i].pos
                let dir = nodes[j].pos.copy().sub(pos)
                let dirmag = dir.mag()
                if (dir.mag() == 0){
                    dirmag = 0.1;
                }
                let force = dir.div(dirmag * dirmag)
                force.mult(Node.forceConstant * (nodes[i].mass + nodes[j].mass) / 5)
                nodes[i].force.add(force.copy().mult(-1))
                nodes[j].force.add(force)
            }
        }

        // apply forces applied by connections
        for (let con of Node.connections) {
            let node1 = nodes[con[0]]
            let node2 = nodes[con[1]]
            let maxDis = con[2]
            let dis = node1.pos.copy().sub(node2.pos)
            let diff = dis.mag() - maxDis

            // console.log(diff);
            // console.log(maxDis);
            
            

            let diffmult = diff / maxDis;
            // console.log(diffmult);

            let moveVector = dis.copy();

            moveVector.mult(p.constrain(diffmult, -1, 1))
            
            // console.log(moveVector);

            // node1.force.sub(dis);
            // node2.force.add(dis);

            node1.force.sub(moveVector);
            node2.force.add(moveVector);
            
            
        }
    }
}

export default Node;