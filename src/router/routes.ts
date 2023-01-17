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
];

export default routes;
