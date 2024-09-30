<template>
    <div class="archive">
        <div class="card-wrapper">
            <ArchiveCard v-for="(card, index) in paginatedCards" :key="index" :thumbnail="card.thumbnail">
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
import Papa from 'papaparse';
import ArchiveCard from "@/components/ArchiveCard.vue";

export default {
    name: "ArchiveView",
    components: {
        ArchiveCard,
    },
    data() {
        return {
            cards: [],
            currentPage: 1,   // To track the current page
            itemsPerPage: 20  // Number of items to show per page
        }
    },
    mounted() {
        // Load the CSV file when the component is mounted
        this.loadCSV();
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
        loadCSV() {
            // Fetch the local CSV file from the 'public' folder
            fetch("/archive_placeholders.csv")  // Replace with your actual file path
                .then(response => response.text())  // Read it as text
                .then(csvText => {
                    // Parse the CSV text using PapaParse
                    Papa.parse(csvText, {
                        header: false, // Set to false if there are no headers in the CSV
                        complete: this.processData,
                        skipEmptyLines: true
                    });
                })
                .catch(error => console.error('Error loading CSV:', error));
        },
        processData(result) {
            // 'result.data' contains an array of arrays because there's no header
            this.cards = result.data.map((row) => ({
                thumbnail: row[0],  // Replace '0' with the correct index for the name column
                keyInfo1: row[1],  // Replace '1' with the correct index for the value column
                value1: row[2],
                text: row[3]
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