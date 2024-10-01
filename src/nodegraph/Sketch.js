import Node from './Node';

class Sketch {
    
    static sketch(p) {

        let courier = p.loadFont('fonts/CourierPrime-Regular.ttf');

        let smallestSize = 0;
        let biggerSize = 0;
        let planrot = 0;
        let fr = 60; //framerate

        // let noNodes = 100;
        // let noConn = 50;
        let physics = true;
        //let nodeCon = [];
        let clicked = false;
        let lerpValue = 0.2;
        let closeNode;
        let closeNodeMag;

        let panning = false;
        let panStart = null;
        let panOffset = p.createVector(0, 0);
        let mouseStart = { x: 0, y: 0 };

        let graphic = p.createGraphics(100, 100, p.P2D);
        graphic.clear();

        let zoomLevel = 1;
        let zoomFactor = 0.001;


        let initSizeBasedVariables = function (p) {

            let container = p.canvas.parentElement;

            p.resizeCanvas(container.offsetWidth, container.offsetHeight);

            graphic.resizeCanvas(p.width, p.height);

            Node.graphic = graphic;

            smallestSize = (p.width < p.height) ? p.width : p.height;
            biggerSize = (p.width > p.height) ? p.width : p.height;
            // console.log("Smallest size: " + smallestSize);
            // console.log("Bigger size: " + biggerSize);


            // 400px should be 3 gravity
            // 650px should be 1 gravity
            // 1000px should be 0.5 gravity
            // gravityConstant = 3;

            const interpolateGravity = (size) => {
                const breakpoints = [
                    { size: 400, gravity: 1.2 },
                    { size: 650, gravity: .8 },
                    { size: 1000, gravity: 0.35 },
                    {
                        size: 2000, gravity: 0.25
                    }
                ];

                if (size <= breakpoints[0].size) {
                    return breakpoints[0].gravity;
                }
                if (size >= breakpoints[breakpoints.length - 1].size) {
                    return breakpoints[breakpoints.length - 1].gravity;
                }
                for (let i = 0; i < breakpoints.length - 1; i++) {
                    const bp1 = breakpoints[i];
                    const bp2 = breakpoints[i + 1];
                    if (size >= bp1.size && size <= bp2.size) {
                        // Non-linear interpolation using an easing function
                        let thingThatCantBe0 = bp2.size - bp1.size;
                        if (thingThatCantBe0 == 0) thingThatCantBe0 = 0.001;
                        const t = (size - bp1.size) / thingThatCantBe0;
                        const easedT = t * t * (3 - 2 * t); // Smoothstep easing function
                        return p.lerp(bp1.gravity, bp2.gravity, easedT);
                    }
                }

            };

            Node.gravityConstant = p.createVector(interpolateGravity(p.width), interpolateGravity(p.height));
        }

        let getTrueMousePos = function (p) {
            let mouseVect = p.createVector((p.mouseX - p.width / 2) / zoomLevel, (p.mouseY - p.height / 2) / zoomLevel);
            


            let panVect = p.createVector(panOffset.x, panOffset.y);
            
            return mouseVect.copy().sub(panVect);

            
        }

        p.setup = function () {

            //let dimensions = this.sketchElement.getBoundingClientRect();
            p.createCanvas(600, 400, p.WEBGL);

            p.pixelDensity(1);

            p.imageMode(p.CENTER);
            p.rectMode(p.CENTER);
            p.angleMode(p.DEGREES);

            console.log(courier);
            
            p.textFont(courier);

            p.setFrameRate(fr);

            initSizeBasedVariables(p);


            p.background(0);

            // Making nodes
            Node.initialize(p, );
            closeNode = Node.all[0];

            console.log("Node.all: ", Node.all);

        }

        p.draw = function () {
            let g = graphic;
            planrot = (planrot + (10 / fr)) % 360;
            p.background(0);

            p.push();
            p.scale(zoomLevel);
            p.translate(panOffset.x * 0.25, panOffset.y * 0.25);
            p.noFill();
            p.stroke(35);
            p.translate(0, 0, -0.5 * smallestSize);
            p.rotateY(planrot);
            //sphere(smallestSize / 2);
            p.scale(1, 0.1, 1);

            for (let i = 1; i < 7; i++) {
                p.push();
                p.translate(0, smallestSize * i / 2, 0)
                p.scale(0.1 * (10 - (i)), 1, 0.1 * (10 - (i)))
                p.sphere(smallestSize / 2);
                p.pop();
                p.push();
                p.translate(0, smallestSize * -i / 2, 0)
                p.scale(0.1 * (10 - (i)), 1, 0.1 * (10 - (i)))
                p.sphere(smallestSize / 2);
                p.pop();
            }
            p.pop();


            p.push();
            //p.background(0);
            g.push();
            g.clear();
            p.scale(zoomLevel);
            p.translate(panOffset.x, panOffset.y)
            g.translate(g.width / 2, g.height / 2);
            g.textFont(courier);
            g.scale(zoomLevel);
            g.translate(panOffset.x, panOffset.y);


            g.fill(255)
            g.stroke(255)
            
            for(let con of Node.connections){
                let node1 = Node.all[con[0]]
                let node2 = Node.all[con[1]]
                p.push();
                p.stroke(140);
                p.line(node1.pos.x, node1.pos.y,
                    node2.pos.x, node2.pos.y)
                p.pop();
            }
            
            Node.applyForces(p)

            for (let node of Node.lowPriority) {
                node.draw()
                if (physics) {
                    node.update()
                }
            }

            for(let node of Node.lowPriority){
                node.drawText();
            }

            for (let node of Node.highPriority) {
                node.draw()
                if (physics) {
                    node.update()
                }
            }

            for(let node of Node.highPriority){
                node.drawText();
            }

            if (clicked == true) {
                // let mousePos = p.createVector((p.mouseX - p.width / 2) - (panOffset.x), (p.mouseY - p.height / 2) - (panOffset.y));
                // mousePos.div(zoomLevel);
                let mousePos = getTrueMousePos(p);
                closeNode.pos.lerp(mousePos, lerpValue)
                if (lerpValue < 0.95) {
                    lerpValue += 0.02;
                }
            }
            g.pop();
            p.pop();
            p.image(g, 0, 0);

        }

        p.windowResized = function () {
            initSizeBasedVariables(p);
        }

        p.touchStarted = function () {
            if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) {
                return;
            }

            // console.log("touch started");
            let trueMousePos = getTrueMousePos(p);
            console.log("x " + trueMousePos.x, "ÿ: " + trueMousePos.y);
            

            mouseStart = trueMousePos.copy();


            
            let mousePos = trueMousePos.copy();
            // mousePos.div(zoomLevel);
            closeNodeMag = 5000;

            for (let node of Node.all) {
                // if (mousePos.copy().sub(node.pos).mag() - closeNode.mass / (2 * p.PI) < mousePos.copy().sub(closeNode.pos).mag() - closeNode.mass / (2 * p.PI))
                let dist = mousePos.copy().sub(node.pos).mag()
                if (dist < closeNodeMag) {
                    // console.log("Closer node: " , node.title, dist);
                    
                    
                    closeNode = node;
                    closeNodeMag = dist;
                }
            }

            // console.log("Closest node: " , closeNode.title);
            // console.log("mx " + mousePos.x, "nx " + closeNode.pos.x);
            // console.log("my " + mousePos.y, "ny " + closeNode.pos.y);



            clicked = true

            //closeNodeMag = mousePos.copy().sub(closeNode.pos).mag()
            // console.log(closeNodeMag);
            if (closeNodeMag < (closeNode.mass / (2 * p.PI)) + 10) {
                p.cursor('grab');
                console.log("grabbing!");
                
            }else{
                clicked = false;
                panning = true;
                panStart = p.createVector(p.mouseX, p.mouseY);
                p.cursor('grab');
            }

        }

        p.touchEnded = function () {
            clicked = false
            lerpValue = 0.2

            panning = false;
            panStart = null;
            
            if (p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height) {
                return;
            }

            p.cursor('auto');


            let currentMousePos = getTrueMousePos(p);
            let mousePosDiff = currentMousePos.dist(mouseStart);

            if (mousePosDiff < 3 && panning == false) {
                console.log("Clicked on: " + closeNode);
                closeNode.clicked();

            }
        }

        p.touchMoved = function () {
            if (panning && !clicked) {
                let dx = p.mouseX - panStart.x;
                let dy = p.mouseY - panStart.y;
                panOffset.x += dx / zoomLevel;
                panOffset.y += dy / zoomLevel;
                panStart = p.createVector(p.mouseX, p.mouseY);
                panOffset.x = p.constrain(panOffset.x, -p.width, p.width);
                panOffset.y = p.constrain(panOffset.y, -p.height, p.height);
            }
        };

        p.mouseWheel = function (event) {
            zoomLevel -= event.delta * zoomFactor;
            zoomLevel = p.constrain(zoomLevel, 0.1, 5); // Constrain zoom level to reasonable limits
        };
    }

}


export default Sketch;