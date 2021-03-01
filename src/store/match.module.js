import ApiService from '@/utils/api.service';
import { FILL_MATCH } from '@/store/mutation.type';
import {
  FETCH_ALL_MATCHES,
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
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [FILL_MATCH](state, matches) {
    state.matches = matches;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
