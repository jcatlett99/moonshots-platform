import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/global.css";
import Seeder from "./seeders/Seeder.js";

console.log(Seeder)

Seeder.seed();

createApp(App).use(router).mount("#app");
