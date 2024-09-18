<template>
    <div class="archive">
        <Carousel class="carousel">
            <div class="card-wrapper">
                <ArchiveCard v-for="(card, index) in cards" :key="index" :thumbnail="card.thumbnail">
                    <template v-slot:key-info>
                        <p><strong>{{ card.keyInfo1 }}</strong> {{ card.value1 }}</p>
                        <p><strong>{{ card.keyInfo2 }}</strong> {{ card.value2 }}</p>
                    </template>
                    <template v-slot:text>
                        <p>{{ card.text }}</p>
                    </template>
                </ArchiveCard>
            </div>
        </Carousel>
    </div>
</template>

<script>
import ArchiveCard from "@/components/ArchiveCard.vue";

export default {
    name: "ArchiveView",
    components: {
        ArchiveCard,
    },
    data() {
        return {
            cards: [
                {
                    thumbnail: 'https://via.placeholder.com/300',
                    keyInfo1: 'Key Info 1:',
                    value1: 'Value 1',
                    text: 'This is additional text for card 1.'
                },
                {
                    thumbnail: 'https://via.placeholder.com/300',
                    keyInfo1: 'Key Info 1:',
                    value1: 'Value 1',
                    text: 'This is additional text for card 1.'
                },
                {
                    thumbnail: 'https://via.placeholder.com/300',
                    keyInfo1: 'Key Info 1:',
                    value1: 'Value 1',
                    text: 'This is additional text for card 1.'
                },
            ],
        }
    }
};
</script>

<style scoped>
.carousel {
    margin-top: 5%;
}

.card-wrapper {
    display: flex;
    gap: 16px;
    /* Adjust the spacing between cards */
}
</style>