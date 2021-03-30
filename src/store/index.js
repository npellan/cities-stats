import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stats: [],
    selectedCity: '',
  },
  mutations: {
    selectCity(state, city) {
      state.selectedCity = city;
    },
  },
});

export default store;
