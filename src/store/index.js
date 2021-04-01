import Vue from 'vue';
import Vuex from 'vuex';
import cities from '../assets/data/data.json';

Vue.use(Vuex);

const getters = {
  getCityById: (state) => (cityId) => state.cities.find((city) => city.id === cityId),
};

const mutations = {
  SELECT_CITY: (state, cityId) => {
    state.selectedCity = cityId;
  },
};

const actions = {
  selectCity: (store, cityId) => {
    store.commit('SELECT_CITY', cityId);
  },
};

const state = {
  cities,
  selectedCity: '',
  color_opacity: 0.5,
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
