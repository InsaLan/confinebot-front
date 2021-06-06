import ApiService from '@/utils/api.service';
import {
  FILL_USER,
} from '@/store/mutation.type';
import {
  FETCH_USER,
} from './action.type';

const state = {
  user: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  user(state) {
    return state.user;
  },
};

const actions = {
  [FETCH_USER](context) {
    return new Promise((resolve) => {
      ApiService.get('/user')
        .then(({ data }) => {
          context.commit(FILL_USER, data);
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
  [FILL_USER](state, user) {
    state.user = user;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
