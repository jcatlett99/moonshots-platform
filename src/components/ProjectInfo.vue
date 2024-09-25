<template>
    <div class="projectinfo">
        <img class="coverimg" v-if="project.imageurl != ''" :src="project.imageurl" :alt="project.title" />
        
        <h1>{{ project.title }}</h1>
        <h3 v-if="project.undertitle != ''">{{ project.undertitle }}</h3>
        
         <div class="projectbio" v-html="project.descriptionHTML"></div>
    </div>
</template>

<script>
import Project from '@/models/Project';

export default {
    name: 'ProjectInfo',
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
    img.coverimg{
        width: calc(100% + 6rem);
        object-fit: cover;

        margin: -2.5rem 0 1rem -3rem;

        height: 20rem;

        border-bottom: 1px solid var(--mid-dark-shade);

    }

    .projectbio{
        margin-top: 2rem;
        
        text-align: justify;
    }

    h1{
        margin-bottom: 0.5rem;
    }

    h3{
        color: var(--accent-light);
        margin-bottom: 1rem;
    }

    tr>*:first-child{
        color: var(--mid-light-shade);
        padding-right: 1rem;
    }

    td{
        padding: 0.25rem 0;
    }

    tr:not(:last-child)>*:last-child{
        border-bottom: 1px solid var(--mid-shade);
    }
</style>