<template>
    <div class="disciplineinfo">
        <img v-if="discipline.imageurl != ''" :src="discipline.imageurl" :alt="discipline.name" />
        
        <h1>{{ discipline.name }}</h1>
        
         <div class="researcherbio" v-html="discipline.descriptionHTML"></div>
    </div>
</template>

<script>
import Discipline from '@/models/Discipline';

export default {
    name: 'DisciplineInfoW',
    props: {
        discipline: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
    img{
        width: calc(100% + 6rem);
        object-fit: cover;

        margin: -2.5rem 0 1rem -3rem;

        height: 10rem;

        border-bottom: 1px solid var(--mid-dark-shade);

    }

    .researcherbio{
        margin-top: 2rem;
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