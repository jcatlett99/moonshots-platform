<template>
    <div class="researchercard">

    </div>
</template>
<script>
export default {
    name: 'ResearcherCard',
    props: {
        researcher: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>

.researchercard{
    position: relative;
    z-index: 1;
}

</style>