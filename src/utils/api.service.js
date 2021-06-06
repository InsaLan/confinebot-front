import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from '@/utils/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.withCredentials = true;
  },
  get(resource) {
    return Vue.axios.get(`${resource}`).catch((error) => {
      throw new Error(`[EBOT] ApiService ${error}`); // check for better logger
    });
  },
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
  delete(resource, params) {
    return Vue.axios.delete(`${resource}`, params);
  },
  patch(resource, params) {
    return Vue.axios.patch(`${resource}`, params);
  },
};
export default ApiService;
