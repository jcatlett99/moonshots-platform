<template>
  <div class="home">
    <Hero imageSrc="/project-images/yelena-cosmism.jpg" mainText="“We are already in space”" subText="- Miha Turšič">
    </Hero>
    <!-- <EventCard></EventCard> -->

    <Carousel class="carousel">
      <div class="card-wrapper">
        <EventCard v-for="(card, index) in cards" :key="index" :thumbnail="card.thumbnail">
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
    <div>
      <HomeCard v-for="(event, index) in events" :key="index" :thumbnail="event.imageurl" :event="event" :class="{ 'image-left': index % 2 === 0, 'image-right': index % 2 !== 0 }">
        <template v-slot:key-info>
          <p><strong>{{ event.title }}</strong></p>
          <p><strong>{{ event.location }}</strong></p>
        </template>
        <template v-slot:text>
          <p>{{ event.descriptionHTML }}</p>
        </template>
        >
      </HomeCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EventCard from "@/components/EventCard.vue";
import HomeCard from "@/components/HomeCard.vue";
import Carousel from "@/components/Carousel.vue";
import Hero from "@/components/Hero.vue";

import Event from "@/models/Event";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    EventCard,
    Hero,
    Carousel,
    HomeCard,
  },
  data() {
    let events = Event.byDate();

    return {
      cards: [
        {
          thumbnail: 'SPACE_BACK_01',
          keyInfo1: 'Space Thinking: The Universe as a Black Canvas',
          text: "A course for the educators of Tec de Monterrey in Mexico. From the history of space and art to the wisdom of shamanism. From nurturing radical imagination to queering the cosmos, this course aimed to spark creativity and expand our imaginations.\nIn this course, we will explore the profound visions of artists and creatives across diverse disciplines, who envisioned humanity's odyssey into the cosmos long before the advent of space travel. These imaginative works not only preceded the era of space programmes but also served of inspiration for the very scientists and engineers who would eventually transform those dreams into reality. Through these sessions, we aim to learn from art to forge new pathways for both our cosmic journey and our existence on Earth.\nIn a time when we need to reimagine our relationship with the planet, we invited the participants to move away from the inertia on Earth to imagine new ways of living in the cosmos with kindness and compassion.Using our Black Canvas framework, we ventured into the darkness of space to sketch anew the systems of care and coexistence we need in our planetary home."
        },
        {
          thumbnail: 'SpiritualCosmos',
          keyInfo1: 'Spiritual Cosmos',
          text: "Our Spiritual Cosmos course is back! Join us to learn and experience the ancestral intersection of spirituality and space. This course is an invitation to connect with the Cosmos but also with to connect with the Universe deep within.\nFrom ancient shamanic practices to the religions and rituals in current space missions, you will learn the multiple ways in which humanity has sought to connect with the celestial vault. As you gain a comprehensive understanding of this interdisciplinary and historical relationship, we will invite you to awaken your own intimate connection with the Universe.\nThe course will be accompanied by various readings and exercises. This includes the experience of trance states and meditative journeys. The course encourages participants to develop a ritual throughout the course and to share with the other participants."},
        {
          thumbnail: 'DreamOnAmazing',
          keyInfo1: 'Children - Dream on Amazing Campaign',
          text: "We are thrilled to announce that KOSMICA will act as jury for Dream On Amazing global challenge to raise awareness of Earth’s environmental needs.\nDream On Amazing' is an educational initiative challenging high school students from various European countries, the US and Canada to design what they think the 'Future Classroom' should look like. Winners win for their school the new cork flooring 'Mars', tested by veteran astronaut Scott Kelly who has flown 4 missions in the new 'Walk on Amazing' campaign."},
        {
          thumbnail: 'anais-1024x576',
          keyInfo1: 'Ethereal Things London',
          text: "“The Sun, the Moon, the Earth and its contents are material to form greater things, that is, ethereal things - greater things than the Creator himself has made” - John Keats, 1817\nKOSMICA: Ethereal Things is a weekend of events exploring our intimate human connection with particle physics and the physics of the universe. Experience impossible situations, encounter the mysterious realm of subatomic physics, and unravel the cosmic web through experiments, performances, music and poetics."},
        {
          thumbnail: 'TourdeMoonBalloonsSmall',
          keyInfo1: 'Festival - Tour de Moon',
          text: "Join the crew of nationwide festival Tour de Moon on Saturday 16th September at 11am for a special screening!\nThis feature film is an hyperenergetic, supercharged and unapologetic ride inside the making of festival Tour de Moon, which was a part of Unboxed; Creativity in the UK. See a multiverse of talents as they take their nationwide festival Tour de Moon- which advocates for plurality, youth countercultures and nightlife- around the UK…Discover an antidote to nationalism, division and experience decolonial practices in action.\nSee behind the scenes, and learn how to make such productions happen. This screening will be followed by a Q&A hosted by Priya Khanchandani, Head of Curatorial at the Design Museum."},
        {
          thumbnail: 'cosmicawethumb',
          keyInfo1: 'Cosmic Awe',
          text: "KOSMICA Institute Presents: Cosmic Awe\nA workshop in Berlin curated by Virginia Vigliar with Chris Paxton & Nahum\nFor millennia, the cosmos has been a source of guidance, projection, and the blank canvas where we could imagine new worlds here on Earth. Contemplating the stars and the sun's position through time has created an awareness of the universe in which we live. It has given birth to cultural expressions that have helped us make sense of our own existences.\nWith the advent of space technologies, rockets, robots, and orbiting machines, a new era has begun, where for many, space seems merely a critical territory to be colonised and profited from. As we become accustomed to the visions of colonies in space and the commercialisation of space resources, we ask for a moment of pause.\nThis workshop questions this way of exploiting the universe and invites participants to reflect on our original connection to it. Through sensory experiences and writing, participants will embark on a journey to decolonise/de-extractivise our connection to the sky and rediscover our cosmic ancestry.\nDon't miss this unique opportunity to delve into the depths of our cosmic past and the possibilities of our cosmic future. Let's journey together to reconnect with the universe in a profound and meaningful way.\nYour senses will be stimulated: smell, vision, sound, taste, and touch."},
        {
          thumbnail: 'take-me-away',
          keyInfo1: 'Expedition - Take me Away!',
          text: "We are thrilled to announce our upcoming KOSMICA Expedition, a journey to explore the legendary UFO hotspots in the USA. From the infamous Roswell incident to the towns and museums that have embraced UFO culture, we'll spend five nights visiting the key places\nthat ignited one of our greatest questions: Are we alone?\nStories of close encounters are numerous, scholars publish books about UFOs, and top scientific institutions worldwide keep seeking evidence of ET communication. Artists worldwide have produced artworks about aliens, and musical movements were born using the mothership imaginary. This is why at KOSMICA we have curated an expedition to immerse ourselves in the debates and mysteries of ufology.\nJoin this KOSMICA Expedition and perhaps witness a sighting ourselves while shouting out loud: Take Me Away!"}
      ],events: events
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
