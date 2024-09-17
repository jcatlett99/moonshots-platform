<template>
  <div class="carousel">
    <div class="carousel-container">
      <div class="carousel-track" ref="track">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  mounted() {
    this.updateTrackWidth();
    window.addEventListener('resize', this.updateTrackWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateTrackWidth);
  },
  methods: {
    updateTrackWidth() {
      const track = this.$refs.track;
      if (track) {
        // Calculate the total width of the track based on the number of cards
        const cards = track.children;
        let totalWidth = 0;
        for (let i = 0; i < cards.length; i++) {
          totalWidth += cards[i].getBoundingClientRect().width;
        }
        track.style.width = `${totalWidth}px`;
      }
    }
  }
}
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
  position: relative;
  /* width: 100%; */

  overflow:hidden;

  margin-bottom: 100px;
}

.carousel-container {
  flex: 1;
  overflow-x: scroll;
  position: relative;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.carousel-container::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

.carousel-track {
  display: flex;
  gap: 16px;
  /* Space between cards */
  align-items: center;
  /* Align items vertically */
  white-space: nowrap;
  /* Prevent cards from wrapping */
}
</style>
