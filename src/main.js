import App from "./App.vue";
import path from "./router/router.js";
import axios from "axios";

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

app.config.globalProperties.$axios = axios;
