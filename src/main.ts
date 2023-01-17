import { createApp } from "vue";
import "./../static/main.scss";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router/router";
import VueCookies from "vue-cookies";
import { PiniaLogger } from "pinia-logger";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

import { firebaseApp } from "./utils/firebase";
import { VueFireAuth, VueFire } from "vuefire";
const app = createApp(App);

const pinia = createPinia();
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: import.meta.env.mode === "PRODUCTION",
  })
);

app.use(Toast, {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
});

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});

app.use(pinia);
app.use(router);
app.use(VueCookies);

app.mount("#app");
