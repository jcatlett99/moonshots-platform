<template>
    <div class="widthconstrainer">
        <ContentSection header="Debug Page 🪳🚫">
            <p>The page where debugging happens. This is where we can see alllllll the stuff that should be accessible on the site.<br><br></p>
            <h2>Researchers</h2>
            <ul>
                <li v-for="researcher in researchers" :key="researcher.id">
                    <router-link :to="{ name: 'researcher', params: {id: researcher.id }}">
                        {{ researcher.displayname }}
                    </router-link>
                </li>
            </ul>
            <br>
            <h2>Disciplines</h2>
            <ul>
                <li v-for="discipline in disciplines" :key="discipline.id">
                    <router-link :to="{ name: 'discipline', params: {id: discipline.id }}">
                        {{ discipline.name }}
                    </router-link>
                </li>
            </ul>
        </ContentSection>
    </div>
</template>
<script>
import ContentSection from "@/components/ContentSection.vue";
import Researcher from "@/models/Researcher";
import Discipline from "@/models/Discipline";

export default {
    name: 'DebugView',
    components: {
        ContentSection
    },
    data() {
        return {
            researchers: null,
            disciplines: null,
        };
    },
    created(){
        this.researchers = Researcher.all;
        this.disciplines = Discipline.all;
    }
    
}
</script>

<style scoped>
ul{
    padding: revert;
}

a{
    color:white;
}
</style>