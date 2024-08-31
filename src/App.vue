<template>

  <header>
    <div>
      <div class="widthconstrainer">
        <h2>Platform for Cosmic Integrationalism</h2>
      </div>
    </div>

    <nav>
      <div class="widthconstrainer">
        <router-link to="/">Home</router-link>
        <router-link to="/about">This</router-link>
        <router-link to="/generic">Generic page</router-link>
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