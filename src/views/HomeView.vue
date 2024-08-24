<template>
  <div class="home">
    <Hero imageSrc="/homepage-images/yelena-cosmism.jpg" mainText="HELLO" subText="Hello again"></Hero>
    <!-- <EventCard></EventCard> -->

    <Carousel class="carousel">
      <div class="card-wrapper">
        <EventCard 
          v-for="(card, index) in cards"
          :key="index"
          :thumbnail="card.thumbnail"
        >
          <template v-slot:key-info>
            <p><strong>{{ card.keyInfo1 }}</strong> {{ card.value1 }}</p>
            <p><strong>{{ card.keyInfo2 }}</strong> {{ card.value2 }}</p>
          </template>
          <template v-slot:text>
            <p>{{ card.text }}</p>
          </template>
        </EventCard>
      </div>
    </Carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from "@/components/EventCard.vue";
import Carousel from "@/components/Carousel.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    EventCard,
    Hero,
    Carousel,
  },
  data() {
    return {
      cards: [
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 1.'
        },
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 2.'
        },
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 3.'
        },
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 3.'
        },
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 3.'
        },
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 3.'
        },
        {
          thumbnail: 'https://via.placeholder.com/300',
          keyInfo1: 'Key Info 1:',
          value1: 'Value 1',
          keyInfo2: 'Key Info 2:',
          value2: 'Value 2',
          text: 'This is additional text for card 3.'
        }
        // Add more cards as needed
      ]
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
  gap: 16px; /* Adjust the spacing between cards */
}

</style>
