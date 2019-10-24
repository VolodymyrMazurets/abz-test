import http from '../../services/httpService';
import { USERS_REQUEST, LOADING, USERS_TOTAL_REQUEST, USER_REQUEST, RISE_COUNT } from '../../constants';
import _ from 'lodash';

const user = {
  id: null,
  name: '',
  email: '',
  phone: '',
  position: '',
  position_id: '',
  registration_timestamp: '',
  photo: ''
}

const state = {
  users: [],
  loading: false,
  total_users: null,
  user: {...user},
  count: null
}

const mutations = {
  [USERS_REQUEST](state, data) {
    state.users = [...data];
    state.count = 6
  },
  [USERS_TOTAL_REQUEST](state, data) {
    state.total_users = data;
  },
  [USER_REQUEST](state, data) {
    state.user = {...data};
  },
  [RISE_COUNT]() {
    state.count += 6
  },
  [LOADING](state, status = true) {
    state.loading = status;
  },
}

const getters = {
  sortedUsers() {
    return state.users.slice(0, state.count);
  },
}

const actions = {
  async [USERS_REQUEST]({ commit }) {
    commit(LOADING, true);
    try {
      const {total_users} = await http.getTotalUsers();
      commit(USERS_TOTAL_REQUEST, total_users);
      const  {users} = await http.getUsers(state.total_users);
      commit(USERS_REQUEST, _.orderBy(users,'registration_timestamp','desc'));
      commit(LOADING, false);
      return;
    } catch (error) {
      commit(LOADING, false);
      throw error;
    }
  },
  async [USER_REQUEST]({ commit }) {
    commit(LOADING, true);
    try {
      const {user} = await http.getUser(1);
      commit(USER_REQUEST, user);
      commit(LOADING, false);
      return;
    } catch (error) {
      commit(LOADING, false);
      throw error;
    }
  },
  [RISE_COUNT]( {commit }) {
    commit(RISE_COUNT);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}