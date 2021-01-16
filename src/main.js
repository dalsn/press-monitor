import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import cash from "cash-dom";
import "./assets/tailwind.css";
import "./libs";

window.cash = cash;
window.host = `${process.env.VUE_APP_CCD_HOST}`;
window.portal = `${process.env.VUE_APP_PORTAL_URL}`;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
