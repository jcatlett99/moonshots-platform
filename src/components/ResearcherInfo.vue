<template>
    <div class="researcherinfo">
        <img v-if="researcher.imageurl != ''" :src="researcher.imageurl" :alt="researcher.name" />
        
        <h1>{{ researcher.displayname }}</h1>
        <h3>{{ researcher.occupation }}</h3>
        <table>
            <tr>
                <td>Name:</td>
                <td>{{ (researcher.title != "")? researcher.title + " ":""}}{{ researcher.name }}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td v-if="researcher.email != ''" class="breakable">{{ researcher.email }}</td>
                <td v-else class="breakable">No Email Provided</td>
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