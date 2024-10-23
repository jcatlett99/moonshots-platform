<template>

    <div class="card">
        <img v-bind:src="'/workshop-images/' + thumbnail + '.jpg'" alt="Thumbnail" class="thumbnail">
        <div class="content">
            <div class="key-info">
                <slot name="key-info"></slot>
            </div>
            <div class="text">
                <slot name="text"></slot>

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
  /* border: 1px solid #ccc; */
  overflow: hidden;
  height: 30em;
  width: 100%;
  display: flex;

  box-shadow: 0 0 0.2rem rgb(85, 85, 85);

  background-color: #24232b;;
}

.image-left {
  flex-direction: row;
  
}

.image-left {
  flex-direction: row-reverse;
}

.thumbnail {
  width: 50%;
  height: auto;

  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding: 16px;
  flex: 1;
  overflow: hidden;
}

.key-info {
  flex: 1;
  padding-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap !important;

  font-size: 1.5em;

  text-align: left;
}

.text {
  flex: 2;
  overflow: hidden;
  white-space: normal;
  text-overflow: clip;

  text-align: left;
}
</style>