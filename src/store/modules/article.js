import { API_KEY } from "../../global";
import * as types from "../mutations_types";

import axios from "axios";

const state = {
  newsArticles: []
};

const getters = {
  newsArticles: state => state.newsArticles
};

const mutations = {
  [types.GET_NEWS_ARTICLES](state, article) {
    state.newsArticles = article;
  }
};

const actions = {
  getNewsArticles({ commit }, state) {
    return new Promise(resolve =>
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?sources=${
            state.id
          }&apiKey=${API_KEY}`
        )
        .then(function(res) {
          console.log(res);
          commit("GET_NEWS_ARTICLES", res.data.articles);
          resolve("ok");
        })
        .catch(function(err) {
          console.log(err);
        })
    );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
