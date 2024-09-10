<template :key="researcher.id">
    <div class="page">
        <div class="widthconstrainer">
            <div class="flex">
                <ContentSection class="flexmain">
                    <ResearcherInfo :researcher="researcher" />
                </ContentSection>
                <div class="flex flexsecondary">
                    <ContentSection v-if="hasAssociations" header="Associations">
                        <p v-for="association in researcher.associations" class="association">{{ association }}</p>
                    </ContentSection>
                    <ContentSection header="Disciplines">
                        W.I.P...
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
            this.researcher = Researcher.find(researcherId);

            if (this.researcher == null) {
                this.$router.push({ name: 'home' })
            }

            this.hasAssociations = this.researcher.associations.length > 0;
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

.association {
    padding: 0.5rem 0;
}

.association:not(:last-child) {
    border-bottom: 1px solid var(--mid-shade);
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