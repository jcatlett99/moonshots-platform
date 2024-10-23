<template>
    <div class="hero">
      <img :src="imageSrc" alt="Hero Image" class="hero-image">
      <div class="hero-text">
        <h1>{{ mainText }}</h1>
        <p>{{ subText }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroComponent',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      mainText: {
        type: String,
        required: true
      },
      subText: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    width: 100%;
    height: 80vh; /* Adjust the height as needed */
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  
  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }
  
  .hero-text h1 {
    margin: 0;
    font-size: 3rem; /* Adjust the size as needed */
  }
  
  .hero-text p {
    margin: 0;
    font-size: 1.5rem; /* Adjust the size as needed */
  }
  </style>
  