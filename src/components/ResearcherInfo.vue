<template>
    <div class="researcherinfo">
        <img :src="researcher.imageurl" :alt="researcher.name" />
        
        <h1>{{ researcher.displayname }}</h1>
        <h3>{{ researcher.occupation }}</h3>
        <table>
            <tr>
                <td>Name:</td>
                <td>{{ researcher.name }}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td v-if="researcher.email != ''">{{ researcher.email }}</td>
                <td v-else>No Email Provided</td>
            </tr>
        </table>
        
         <div class="researcherbio" v-html="researcher.bioHTML"></div>
    </div>
</template>

<script>
export default {
    name: 'ResearcherInfo',
    props: {
        researcher: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
    img{
        width: 35%;
        margin: 0 0 1rem 2rem;
        float: right;
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