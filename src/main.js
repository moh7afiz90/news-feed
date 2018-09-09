import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.config.productionTip = false;
Vue.use(Vuetify);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
