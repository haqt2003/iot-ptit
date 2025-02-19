import { createRouter, createWebHistory } from "vue-router"
import DashboardView from "../views/DashboardView.vue"

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/history",
    name: "history",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoryView.vue"),
  },
  {
    path: "/sensor",
    name: "sensor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SensorView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
