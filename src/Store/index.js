import Vue from "vue";
import Vuex from "vuex";
import {API_KEY} from '../'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Select Source State
    selectedSources: [],
    selectedSource: "",
    // News Feed State
    newsArticles: []
  },

  getters: {
    // Select Source Getters
    selectedSources: state => state.selectedSources,
    selectedSource: state => state.selectedSource,
    // News Feed Getters
    newsArticle: state => state.newsArticles
  },

  mutations: {
    // Select Source Mutations
    [types.GET_NEWS](state, sources) {
      state.selectedSources = sources;
    },
    [types.GET_NEWS_SOURCES](state, source) {
      for (var i = 0; i < state.selectedSources.length; i++) {
        if (state.selectedSources[i].id == source) {
          state.selectedSource = state.selectedSources[i];
        }
      }
    },
    // News Feed Mutations
    [types.GET_NEWS_FEED](state, article){
      state.newsArticles = article
    }
  },

  actions: {
    // Select Source Actions
    async fetchNews(value) {
      this.source = value;

      if (value)
        await axios
          .get(
            `https://newsapi.org/v2/top-headlines?sources=${
              this.source
            }&apiKey=${API_KEY}`
          )
          .then(response => {
            let result = response.data.articles;
            result = result.map(a => {
              return Object.freeze(a);
            });
            this.articles = result;
          });
    },

    moment(...args) {
      return moment(...args);
    }
    // Select Source Actions

  }
});


export default {
  state,
  getters,
  mutations,
  actions
}