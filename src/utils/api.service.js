import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { API_URL } from '@/utils/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  setHeader(token) {
    Vue.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  get(resource) {
    return Vue.axios.get(`${resource}`).catch((error) => {
      throw new Error(`[EBOT] ApiService ${error}`); // check for better logger
    });
  },
  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },
};
export default ApiService;
