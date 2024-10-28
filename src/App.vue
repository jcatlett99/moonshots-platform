<template>
  <header>
    <div>
      <div class="widthconstrainer flex">
        <router-link to="/" class="websitetitle flex">
          <img src="@/assets/logo-cosmic-transparent.png" alt="Cosmic integrationalists logo">
          <h2>
            Platform for Cosmic Integrationalists
          </h2>
        </router-link>
      </div>
    </div>

    <nav>
      <div class="widthconstrainer">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'nodegraph' }">Node Graph</router-link>
        <router-link :to="{ name: 'archive' }">Archive</router-link>
        <!-- <router-link :to="{ name: 'debug'}">Debug</router-link> -->
      </div>
    </nav>
  </header>

  <router-view />

  <footer>
    <div class="widthconstrainer">
      <p>Made with love by the Cosmic Integrationalists team.</p>
      <p>&copy; 2024</p>
    </div>
  </footer>

</template>