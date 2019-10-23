import http from '../../services/httpService';
import { POSITIONS_REQUEST, LOADING } from '../../constants';

const position = {
  id: null,
  name: ''
}

const state = {
  positions: [],
  loading: false,
  position: {...position}
}

const mutations = {
  [POSITIONS_REQUEST](state, data) {
    state.positions = [...data];
  },
  [LOADING](state, status = true) {
    state.loading = status;
  },
}

const actions = {
  async [POSITIONS_REQUEST]({ commit }) {
    commit(LOADING, true);
    try {
      const { positions }  = await http.getPositions();
      commit(POSITIONS_REQUEST, positions);
      commit(LOADING, false);
      return;
    } catch (error) {
      commit(LOADING, false);
      throw error;
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}