<template>

    <div class="card">
        <img src="../assets/homepage-images/yelena-cosmism.jpg" alt="Thumbnail" class="thumbnail">
        <div class="content">
            <div class="key-info">
                <slot name="key-info"></slot>
                <p>Title: </p>
                <p>Subtitle: </p>
            </div>
            <div class="text">
                <slot name="text"></slot>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>

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
  overflow: hidden;
  height: 30em;
  width: 100%;
  display: flex;

  box-shadow: 0 0 0.75rem rgb(85, 85, 85);

  background-color: aqua;
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
  white-space: nowrap;

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