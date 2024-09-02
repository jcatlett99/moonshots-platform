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
        <router-link :to="{ name: 'home'}">Home</router-link>
        <router-link :to="{ name: 'about'}">This</router-link>
        <!-- <router-link to="/generic">Generic page</router-link> -->
        <router-link :to="{ name: 'researcher', params: { id: 0 } }">researcher 0</router-link>
      </div>
    </nav>
  </header>

  <router-view />

  <footer>
    <div class="widthconstrainer">
      <p>Made with love by the Cosmic Integrationalism team.</p>
      <p>&copy; 2024</p>
    </div>
  </footer>

</template>