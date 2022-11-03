import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ModalView from "../views/modalView.vue";
import Card from "@/components/card.vue";
import Login from "@/components/loginForm.vue";
import ModalAdress from "../components/modalAdress.vue";

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
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/modal",
    name: "modal",
    component: ModalView,
  },
  {
    path: "/card",
    name: "card",
    component: Card,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/modalAdress",
    name: "modalAdress",
    component: ModalAdress,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
