import http from '../../services/httpService';
import { USERS_REQUEST, LOADING, USERS_TOTAL_REQUEST } from '../../constants';
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
  user: {...user}
}

const mutations = {
  [USERS_REQUEST](state, data) {
    state.users = [...data];
  },
  [USERS_TOTAL_REQUEST](state, data) {
    state.total_users = data;
  },
  [LOADING](state, status = true) {
    state.loading = status;
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
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}