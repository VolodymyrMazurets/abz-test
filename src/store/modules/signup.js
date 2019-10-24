import http from '../../services/httpService';
import { TOKEN_REQUEST, LOADING, SIGNUP_REQUEST, SIGNUP_UPDATE_FORM, SIGNUP_UPDATE_VALUE, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../../constants';

const state = {
  token: '',
  loading: false,
  hasError: false,
  complete: false,
  formData: {
    position_id: {},
    name: "",
    email: "",
    phone: "",
    photo: ""
  }
}

const mutations = {
  [TOKEN_REQUEST](state, data) {
    state.token = data
  },
  [LOADING](state, status = true) {
    state.loading = status;
  },
  [SIGNUP_REQUEST](state, data) {
    state.token = data
  },
  [SIGNUP_UPDATE_FORM](state, { key, value }) {
    state.formData[key] = value;
  },
  [SIGNUP_UPDATE_VALUE](state, { key, value }) {
    state.formHelpers[key] = value;
  },
  [SIGNUP_SUCCESS](state) {
    state.loading = false;
    state.hasError = false;
    state.complete = true;
  },
  [SIGNUP_FAILURE](state) {
    state.loading = false;
    state.hasError = true;
  },
}

const actions = {
  async [TOKEN_REQUEST]({ commit }) {
    commit(LOADING, true);
    try {
      const { token } = await http.getToken();
      localStorage.setItem('token', token);
      commit(TOKEN_REQUEST, token);
      commit(LOADING, false);
      return;
    } catch (error) {
      commit(LOADING, false);
      throw error;
    }
  },
  async [SIGNUP_REQUEST]({ commit }, payload) {
    commit(SIGNUP_REQUEST);
    try {
      await http.signup(payload);
      return 1
    } catch(e) {
      return 0
    }
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}