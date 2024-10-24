<template :key="event.id">
    <div v-if="event" class="page">
        <div class="widthconstrainer">
            <div class="flex">
                <ContentSection class="flexmain">
                    <EventInfo :event="event" />
                </ContentSection>
            </div>
        </div>
    </div>
</template>

<script>
import Event from '../models/Event';
import ContentSection from "@/components/ContentSection.vue";
import EventInfo from "@/components/EventInfo.vue";

export default {
    name: 'ProjecView',
    components: {
        ContentSection,
        EventInfo
    },
    data() {
        return {
            event: null,
        };
    },
    methods: {
        async initData() {
            const eventId = this.$route.params.id;
            let event = Event.find(eventId);

            console.log(event);

            if (event == null) {
                this.$router.push({ name: 'home' })
            }else{
                this.event = event;

            }

            // this.hasAssociations = this.researcher.associations.length > 0;
        }
    },
    created() {

        this.initData();        

        if(this.event != null){
            this.$watch(() => this.$route.params.id, this.initData);
        }
    },
};

</script>

<style scoped>
.flexmain {
    flex: 2;
    padding: 2rem;
    align-self: flex-start;
}

.flexsecondary {
    flex: 1;
    flex-direction: column;
    align-content: flex-start;
}

.flexsecondary ul {
    list-style: none;
}

.sidelist {
    padding: 0.5rem 0;
}

.sidelist:not(:last-child) {
    border-bottom: 1px solid var(--mid-shade);
}

.sidelist a{
    color: var(--light-shade);
} 

@media screen and (max-width: 768px) {
    .flex {
        flex-direction: column;
    }

    .flexmain {
        padding: 0.5rem 0;
    }

}
</style>