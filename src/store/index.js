import Vue from 'vue';
import Vuex from 'vuex';
import cities from '../assets/data/data.json';

Vue.use(Vuex);

const getters = {
  getCityById: (state) => (cityId) => state.cities.find((city) => city.id === cityId),
};

const mutations = {
  SELECT_CITY: (state, city) => {
    const cityId = city.slice(4);
    state.selectedCity = cityId;
  },
};

const actions = {};

const state = {
  cities,
  selectedCity: '',
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
