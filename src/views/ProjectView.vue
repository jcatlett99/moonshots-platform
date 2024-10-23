<template :key="project.id">
    <div v-if="project" class="page">
        <div class="widthconstrainer">
            <div class="flex">
                <ContentSection class="flexmain">
                    <ProjectInfo :project="project" />
                </ContentSection>
                <div class="flex flexsecondary">
                    <ContentSection v-if="hasDisciplines" header="Project Disciplines">
                        <p v-for="discipline in project.disciplines" class="sidelist">
                            <router-link :to="{ name: 'discipline', params: { id: discipline.shortname }}" class="researcher">{{ discipline.name }}</router-link>
                        </p>
                    </ContentSection>
                    <ContentSection header="Project Collaborators" v-if="hasResearchers">
                        <p v-for="researcher in project.researchers" class="sidelist">
                            <router-link v-if="researcher" :to="{ name: 'researcher', params: { id: researcher.shortname }}" class="researcher">{{ researcher.name }}</router-link>
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Project from '../models/Project';
import ContentSection from "@/components/ContentSection.vue";
import ProjectInfo from '@/components/ProjectInfo.vue';

export default {
    name: 'ProjecView',
    components: {
        ContentSection,
        ProjectInfo
    },
    data() {
        return {
            project: null,
        };
    },
    methods: {
        async initData() {
            const projectId = this.$route.params.id;
            let project = Project.find(projectId);

            console.log(project);

            if (project == null) {
                this.$router.push({ name: 'home' })
            }else{
                this.project = project;

                this.hasResearchers = this.project.researchers.length > 0;
                this.hasDisciplines = this.project.disciplines.length > 0;
            }

            // this.hasAssociations = this.researcher.associations.length > 0;
        }
    },
    created() {

        this.initData();        

        if(this.project != null){
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