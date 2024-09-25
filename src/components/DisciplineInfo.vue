<template>
    <div class="disciplineinfo">
        <img class="coverimg" v-if="discipline.imageurl != ''" :src="discipline.imageurl" :alt="discipline.name" />
        
        <h1>{{ discipline.name }}</h1>
        
         <div class="disciplinebio" v-html="discipline.descriptionHTML"></div>
    </div>
</template>

<script>
import Discipline from '@/models/Discipline';

export default {
    name: 'DisciplineInfo',
    props: {
        discipline: {
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

        height: 12.5rem;

        border-bottom: 1px solid var(--mid-dark-shade);

    }

    .disciplinebio{
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