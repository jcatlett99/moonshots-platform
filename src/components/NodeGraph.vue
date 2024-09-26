<style>
#sketch {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    overflow: hidden;
    user-select: none;
    
}
</style>

<template>
    <div ref="nodeGraphContainer" id="sketch">

    </div>
</template>

<script>
import p5 from 'p5';
import Sketch from '../nodegraph/Sketch';


export default {
    name: 'NodeGraphView',
    components: {

    },
    methods: {
        async initSketch() {
            this.sketchElement = document.getElementById('sketch');
            this.sketch = new p5(Sketch.sketch, this.sketchElement);
        },
        forceReload(){
            if(this.sketch){
                this.sketch.remove();
                this.initSketch();
            }
        }
    },
    mounted() {
        //console.log('NodeGraphView mounted');
        // window.addEventListener('resize', this.forceReload);
        this.initSketch();
    },
    beforeUnmount() { // Vue 3 lifecycle hook
        // Perform cleanup here
        // window.removeEventListener('resize', this.force);
        if (this.sketch) {
            this.sketch.remove(); // Example: Remove the p5 sketch
        }
    }
}
</script>