interface IRoute {
  path: string;
  component: any;
  name?: string;
  meta?: any;
}

const routes: IRoute[] = [
  { path: "/", component: () => import("@/views/PageHome.vue"), name: "Home" },
  {
    path: "/login",
    component: () => import("@/views/PageLogin.vue"),
    name: "Login",
  },

  {
    path: "/day/:id",
    component: () => import("@/views/PageDay.vue"),
    name: "Day",
  },

  {
    path: "/test",
    component: () => import("@/views/PageTest.vue"),
    name: "Test",
  },

  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/PageError.vue"),
    name: "Error",
  },
];

export default routes;
