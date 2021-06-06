import ApiService from '@/utils/api.service';
import {
  LOGIN,
  CHECK_AUTH,
} from './action.type';
import { ADD_AUTH, SET_ERROR } from './mutation.type';

const state = {
  errors: null,
  user: {},
  isAuthenticated: false,
};

const getters = {
  // eslint-disable-next-line no-shadow
  getUser(state) {
    return state.user;
  },
  // eslint-disable-next-line no-shadow
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};
const actions = {
  [LOGIN](context, creds) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve) => {
      ApiService.post('/login', { username: creds.username, password: creds.password })
        .then(({ data }) => {
          context.commit(ADD_AUTH, data.token);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.error);
        });
    });
  },
  [CHECK_AUTH](context) { // add header to request to handle protected endpoints
    if (state.user.token) {
      // ApiService.setHeader(state.user.token);
      ApiService.get('user')
        .then(({ data }) => {
          console.log(data);
          state.user.username = data.username;
        })
        .catch(({ res }) => {
          context.commit(SET_ERROR, res.data.error);
        });
    }
  },
};
const mutations = {
  // eslint-disable-next-line no-shadow
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  // eslint-disable-next-line no-shadow
  [ADD_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user.token = user;
    state.errors = {};
  },

};

export default {
  state,
  actions,
  mutations,
  getters,
};
