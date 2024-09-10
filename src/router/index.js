import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResearcherView from "../views/ResearcherView.vue";
import DisciplineView from "../views/DisciplineView.vue";
import DebugView from "../views/DebugView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },

  {
    path: "/generic",
    name: "generic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/GenericView.vue");
    },
  },
  {
    path: "/researcher/:id", // Dynamic segment
    name: "researcher",
    component: ResearcherView,
  },
  {
    path: "/discipline/:id", // Dynamic segment
    name: "discipline",
    component: DisciplineView,
  },
  {
    path: "/debug",
    name: "debug",
    component: DebugView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
