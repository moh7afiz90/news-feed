import * as types from "../mutations_types";
import { API_KEY } from "../../global";

import axios from "axios";

const state = {
  selectedSources: [],
  selectedSource: ""
};

const getters = {
  selectedSources: state => state.selectedSources,
  selectedSource: state => state.selectedSource
};

const mutations = {
  [types.GET_NEWS](state, sources) {
    state.selectedSources = sources;
  },
  [types.GET_NEWS_SOURCES](state, source) {
    for (var i = 0; i < state.selectedSources.length; i++) {
      if (state.selectedSources[i].id == source) {
        state.selectedSource = state.selectedSources[i];
      }
    }
  }
};

const actions = {
  getNews({ commit }) {
    axios
      .get(`https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`)
      .then(function(res) {
        console.log(res);
        commit("GET_NEWS", res.data.sources);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getSelectedSources({ commit }, source) {
    commit("GET_NEWS_SOURCES", source);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
