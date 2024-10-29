<template>

    <div class="card">
        <img v-bind:src="'/project-images/' + thumbnail + '.jpg'" alt="Thumbnail" class="thumbnail">
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
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  height: 30em;
  width: 20em;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 0.75rem rgb(85, 85, 85);
}

.thumbnail {
  width: 100%;
  height: auto;
  max-height: 40%;
  object-fit: fill;
}

.content {
  display: flex;
  flex-direction: column;
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

  text-align: left;
}

.text {
  flex: 2;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis !important; 

  text-align: left;
}
</style>