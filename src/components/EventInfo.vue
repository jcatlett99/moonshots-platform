<template>
    <div class="eventinfo">
        <img class="coverimg" v-if="event.imageurl != ''" :src="event.imageurl" :alt="event.title" />
        
        <h1>{{ event.title }}</h1>
        <h3 v-if="event.location != ''">{{ event.location }}</h3>

        <table>
            <tr v-if="event.startdate != ''">
                <td>Date</td>
                <td>{{ event.startdate.toLocaleDateString() }}</td>
            </tr>
            <tr v-if="event.enddate != '' && event.enddate - event.startdate != 0">
                <td>Until</td>
                <td>{{ event.enddate.toLocaleDateString() }}</td>
            </tr>
            <tr v-if="event.location != ''">
                <td>Location</td>
                <td>{{ event.location }}</td>
            </tr>
        </table>

        <div class="line"></div>
        
        <div class="eventbio" v-html="event.descriptionHTML"></div>

        <div>
            <a class="actionButton" :href="event.link" target="_blank">Official Website</a>
        </div>

    </div>
</template>

<script>
import Event from '@/models/Event';

export default {
    name: 'EventInfo',
    props: {
        event: {
            type: Event,
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

    .eventbio{
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

    div:has(>.actionButton){
        margin-top: 2rem;
        position: relative;
    }

    .actionButton{
        background-color: var(--accent-light);
        border: 1px solid var(--accent-dark);
        color: black;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        float: right;
    }

</style>