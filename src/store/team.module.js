import ApiService from '@/utils/api.service';
import {
  FETCH_TEAMS,
  DELETE_TEAM,
  CREATE_TEAM,
} from './action.type';
import { ADD_TEAM, POPULATE_TEAMS, REMOVE_TEAM } from './mutation.type';

const state = {
  teams: [],
};

const getters = {
  // eslint-disable-next-line no-shadow
  teams(state) {
    return state.teams;
  },
};

const actions = {
  [FETCH_TEAMS](context) {
    return new Promise((resolve) => {
      ApiService.get('/team')
        .then(({ data }) => {
          context.commit(POPULATE_TEAMS, data);
          resolve(data);
        })
        .catch(({ res }) => {
          console.log(res);
        });
    });
  },
  [CREATE_TEAM](context, team) {
    return new Promise((resolve) => {
      ApiService.post('/team', team)
        .then(({ data }) => {
          context.commit(ADD_TEAM, team);
          resolve(data);
        })
        .catch(({ res }) => {
          console.log(res);
          console.log('throwing error...');
        });
    });
  },
  [DELETE_TEAM](context, id) {
    return new Promise((resolve) => {
      ApiService.delete(`/team/${id}`)
        .then(({ data }) => {
          context.commit(REMOVE_TEAM, id);
          resolve(data);
        })
        .catch(({ res }) => {
          console.log(res);
          console.log('throwing error...');
        });
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [POPULATE_TEAMS](state, teams) {
    state.teams = teams;
  },
  // eslint-disable-next-line no-shadow
  [ADD_TEAM](state, team) {
    state.teams.push(team);
  },
  // eslint-disable-next-line no-shadow
  [REMOVE_TEAM](state, id) {
    state.teams = state.teams.filter((t) => t.id !== id);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
