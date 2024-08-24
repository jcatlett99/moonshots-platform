<template>
  <div class="carousel">
    <button class="carousel-button left" @click="scrollLeft">&#9664;</button>
    <div class="carousel-container">
      <div class="carousel-track" ref="track">
        <slot></slot>
      </div>
    </div>
    <button class="carousel-button right" @click="scrollRight">&#9654;</button>
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
    scrollLeft() {
      const track = this.$refs.track;
      const scrollAmount = track.clientWidth / 2; // Adjust this value if needed
      track.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    },
    scrollRight() {
      const track = this.$refs.track;
      const scrollAmount = track.clientWidth / 2; // Adjust this value if needed
      track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    },
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
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  gap: 16px; /* Space between cards */
  align-items: center; /* Align items vertically */
  white-space: nowrap; /* Prevent cards from wrapping */
}

.carousel-button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.carousel-button.left {
  left: 0;
}

.carousel-button.right {
  right: 0;
}
</style>
