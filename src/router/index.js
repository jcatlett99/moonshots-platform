import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResearcherView from "../views/ResearcherView.vue";
import DisciplineView from "../views/DisciplineView.vue";
import ProjectView from "../views/ProjectView.vue";
import DebugView from "../views/DebugView.vue";

import ArchiveView from "../views/ArchiveView.vue";

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
    path: "/archive",
    name: "archive",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/ArchiveView.vue");
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
    path: "/project/:id", // Dynamic segment
    name: "project",
    component: ProjectView,
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
