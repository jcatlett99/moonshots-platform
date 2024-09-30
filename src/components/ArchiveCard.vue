<template>

  <div class="card">
    <img src="../assets/homepage-images/yelena-cosmism.jpg" alt="Thumbnail" class="thumbnail">
    <div class="content">
      <div class="key-info">
        <slot name="key-info"></slot>
      </div>
      <div class="lower-text">
        <div class="value">
          <slot name="value"></slot>
        </div>
        <div class="text">
          <slot name="text"></slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'EventCard',
  props: {
    thumbnail: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped>
.card {
  border: 1px solid #ccc;
  /* border-radius: 8px; */
  overflow: hidden;
  height: 15em;
  width: 10em;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 0.75rem rgb(85, 85, 85);
}

.thumbnail {
  width: 100%;
  height: auto;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5em;
}

.key-info {

  overflow: hidden;
  max-height: 60%;

  text-align: left;
  font-size: 1em;
}

.text {
  flex: 2;
  overflow: hidden;
  white-space: normal;
  text-overflow: clip;

  text-align: left;
  font-size: 0.75em;

}
</style>