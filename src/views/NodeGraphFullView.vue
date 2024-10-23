<template>
    <div class="fullscreen">
        <NodeGraph />
    </div>
</template>
<script>
import NodeGraph from '../components/NodeGraph.vue';

    export default {
        name: 'NodeGraphView',
        components: {
            NodeGraph
        },
    };
</script>
<style scoped>
.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>