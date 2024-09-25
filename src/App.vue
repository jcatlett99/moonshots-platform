<template>
  <header>
    <div>
      <div class="widthconstrainer flex">
        <router-link to="/" class="websitetitle flex">
          <img src="@/assets/logo-cosmic-transparent.png" alt="Cosmic integrationalists logo">
          <h2>
            Platform for Cosmic Integrationalism
          </h2>
        </router-link>
      </div>
    </div>

    <nav>
      <div class="widthconstrainer">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'debug'}">Debug</router-link>
        <router-link to="/archive">Archive</router-link>
      </div>
    </nav>
  </header>

  <router-view />

  <div>
    <div class="widthconstrainer">
      <p>Made with love by the Cosmic Integrationalism team.</p>
      <p>&copy; 2024</p>
    </div>
  </div>

</template>