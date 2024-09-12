<template :key="researcher.id">
    <div v-if="researcher" class="page">
        <div class="widthconstrainer">
            <div class="flex">
                <ContentSection class="flexmain">
                    <ResearcherInfo :researcher="researcher" />
                </ContentSection>
                <div class="flex flexsecondary">
                    <ContentSection v-if="hasAssociations" header="Associations">
                        <p v-for="association in researcher.associations" class="association">{{ association }}</p>
                    </ContentSection>
                    <ContentSection header="Disciplines" v-if="hasDisciplines">
                        <p class="discipline" v-for="discipline in researcher.disciplines">
                            <router-link :to="{ name: 'discipline', params: { id: discipline.shortname }}" class="association">{{ discipline.name }}</router-link>
                        </p>
                    </ContentSection>
                    <ContentSection header="Projects" v-if="hasProjects">
                        <p class="discipline" v-for="project in researcher.projects">
                            <router-link :to="{ name: 'project', params: { id: project.shortname }}" class="association">{{ project.title }}</router-link>
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Researcher from '../models/Researcher';
import ContentSection from "@/components/ContentSection.vue";
import ResearcherInfo from '@/components/ResearcherInfo.vue';

export default {
    name: 'ResearcherView',
    components: {
        ContentSection,
        ResearcherInfo
    },
    data() {
        return {
            researcher: null,
        };
    },
    methods: {
        async initData() {
            const researcherId = this.$route.params.id;
            let researcher = Researcher.find(researcherId);

            if (researcher == null) {
                this.$router.push({ name: 'home' })
            }else{
                this.researcher = researcher;
                this.hasAssociations = this.researcher.associations.length > 0;
                this.hasDisciplines = this.researcher.disciplines.length > 0;
                this.hasProjects = this.researcher.projects.length > 0;
            }
        }
    },
    created() {

        this.initData();

        this.$watch(() => this.$route.params.id, this.initData);
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

.association, .discipline{
    padding: 0.5rem 0;
}

.association:not(:last-child), .discipline:not(:last-child) {
    border-bottom: 1px solid var(--mid-shade);
}

.discipline a{
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