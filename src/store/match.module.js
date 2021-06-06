import ApiService from '@/utils/api.service';
import {
  FILL_MATCH,
  ADD_MATCH,
} from '@/store/mutation.type';

import {
  FETCH_ALL_MATCHES,
  CREATE_MATCH,
} from './action.type';

const state = {
  matches: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  matches(state) {
    return state.matches;
  },
};

const actions = {
  [FETCH_ALL_MATCHES](context) {
    return new Promise((resolve) => {
      ApiService.get('/match')
        .then(({ data }) => {
          context.commit(FILL_MATCH, data);
          resolve(data);
        })
        .catch(({ res }) => {
          console.log(res);
          // context.commit(SET_ERROR, res.data.error);
        });
    });
  },
  [CREATE_MATCH](context) {
    return new Promise((resolve) => {
      ApiService.post('/match')
        .then(({ data }) => {
          context.commit();
          console.log(data);
          resolve(data);
        })
        .catch(({ res }) => {
          console.log(res);
        });
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [FILL_MATCH](state, m) {
    state.matches = m;
  },
  // eslint-disable-next-line no-shadow
  [ADD_MATCH](state, m) {
    state.matches.push(m);
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
