import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import page1 from "./pages/page-one.vue";
import page2 from "./pages/page-two.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: page1,
  },
  {
    path: "/moviePage",
    component: page2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
