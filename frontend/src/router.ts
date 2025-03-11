import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/RegistrationForm.vue"),
    },
    {
      path: "/login",
      component: () => import("./components/LoginForm.vue"),
    },
  ],
});
export default router;