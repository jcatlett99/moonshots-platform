<template :key="discipline.id">
    <div v-if="discipline" class="page">
        <div class="widthconstrainer">
            <div class="flex">
                <ContentSection class="flexmain">
                    <DisciplineInfo :discipline="discipline" />
                </ContentSection>
                <div class="flex flexsecondary">
                    <!-- <ContentSection v-if="hasAssociations" header="Associations">
                        <p v-for="association in researcher.associations" class="association">{{ association }}</p>
                    </ContentSection> -->
                    <ContentSection header="Researchers in the field" v-if="hasResearchers">
                        <p v-for="researcher in discipline.researchers" class="researcher">
                            <router-link :to="{ name: 'researcher', params: { id: researcher.id }}" class="researcher">{{ researcher.name }}</router-link>
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Discipline from '../models/Discipline';
import ContentSection from "@/components/ContentSection.vue";
import DisciplineInfo from '@/components/DisciplineInfo.vue';

export default {
    name: 'DisciplineView',
    components: {
        ContentSection,
        DisciplineInfo
    },
    data() {
        return {
            discipline: null,
        };
    },
    methods: {
        async initData() {
            const disciplineId = this.$route.params.id;
            let discipline = Discipline.find(disciplineId);

            if (discipline == null) {
                this.$router.push({ name: 'home' })
            }else{
                this.discipline = discipline;
                this.hasResearchers = this.discipline.researchers.size > 0;
            }

            // this.hasAssociations = this.researcher.associations.length > 0;
        }
    },
    created() {

        this.initData();        

        if(this.discipline != null){
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

.researcher {
    padding: 0.5rem 0;
}

.researcher:not(:last-child) {
    border-bottom: 1px solid var(--mid-shade);
}

.researcher a{
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