<template>
    <div class="archive">
        <div class="card-wrapper">
            <ArchiveCard v-for="(card, index) in paginatedCards" :key="index" :thumbnail="card.thumbnail" @click="$router.push('/project/' + card.shortname)">
                <template v-slot:key-info>
                    <p><strong>{{ card.keyInfo1 }}</strong></p>
                </template>
                <template v-slot:value>
                    <p>{{ card.value1 }}</p>
                </template>
                <template v-slot:text>
                    <p>{{ card.text }}</p>
                </template>
            </ArchiveCard>
        </div>

        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1"><</button>
            <button @click="nextPage" :disabled="endIndex >= cards.length">></button>
        </div>
    </div>
</template>

<script>
import Project from '../models/Project';
import ProjectInfo from '@/components/ProjectInfo.vue';
import ArchiveCard from "@/components/ArchiveCard.vue";

// import Papa from 'papaparse';

export default {
    name: "ArchiveView",
    components: {
        ArchiveCard,
        ProjectInfo
    },
    data() {
        return {
            projects: [],
            cards: [],
            currentPage: 1,   // To track the current page
            itemsPerPage: 20  // Number of items to show per page
        }
    },
    mounted() {
        this.projects = Project.all;
        this.processData();
    },
    computed: {
        // Calculate the start and end indices of the items to display
        paginatedCards() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = this.currentPage * this.itemsPerPage;
            return this.cards.slice(startIndex, endIndex); // Return the sliced portion of the array
        },
        endIndex() {
            return this.currentPage * this.itemsPerPage;
        }
    },
    methods: {
        processData() {
            this.cards = this.projects.map((project) => ({
                shortname: project.shortname,
                thumbnail: project.imageurl,
                keyInfo1: project.title,
                value1: project.undertitle,
                text: project.date
            }));
        },
        nextPage() {
            if (this.endIndex < this.cards.length) {
                this.currentPage += 1;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
            }
        }
    }
};
</script>

<style scoped>

.archive {
    margin-top: 5%;
}

.card-wrapper {
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;
}

.pagination {
    margin-top: 2em;

    display: flex;
    justify-content: center;

}

.pagination button {
    margin: 0.5em;
    padding: 0.5em;

    background-color: transparent;
    border-radius: 0.3em;
    color: white;
    border: solid 0.1em white;

    transition: all .2s ease-in-out;
}

.pagination button:hover:enabled {
    transform: scale(1.2);
    box-shadow: 0px 0px 10px white;
}


.pagination button:active {
    transition: all .2s ease-in-out;
    transform: scale(0.8);
}

.pagination button:disabled {
    scale: 1.05;
    background-color: rgb(58, 58, 58);
    color: rgb(168, 168, 168);
    border: solid 0.1em rgb(168, 168, 168);
}
</style>