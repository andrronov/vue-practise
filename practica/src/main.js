import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "@/assets/main-style.scss";

createApp(App).use(store).mount("#app");
