import Vue from 'vue';
import Vuex from 'vuex';
import positions from './modules/positions';
import users from './modules/users';
import signup from './modules/signup';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    positions,
    users,
    signup
  }
})

Vue.use(store);

export default store;