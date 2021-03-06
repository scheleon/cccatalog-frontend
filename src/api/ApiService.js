
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import es6Promise from 'es6-promise';

es6Promise.polyfill();


const ApiService = {
  init(baseUrl = process.env.API_URL, authParams) {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = baseUrl;
    Vue.axios.defaults.auth = authParams;
  },

  setHeader(headerParams) {
    Object.assign(Vue.axios.defaults.headers, headerParams);
  },

  query(resource, params) {
    return Vue.axios
      .get(resource, { params });
  },

  get(resource, slug) {
    return Vue.axios
      .get(`${resource}/${slug}`);
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params, headers) {
    return Vue.axios.put(`${resource}/${slug}`, params, { headers });
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource, slug, headers) {
    return Vue.axios
      .delete(`${resource}/${slug}`, { headers });
  },
};

export default ApiService;
