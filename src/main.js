import Vue from "vue";
import App from "./App.vue";
import router from "./utils/router";

import VTooltip from 'v-tooltip'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

Vue.use(VTooltip)