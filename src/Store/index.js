import Vue from "vue";
import Vuex from "vuex";

import news_source from "./modules/news_source.js";
import article from "./modules/article.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news_source,
    article
  },
  strict: true
});
