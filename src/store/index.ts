import { createStore } from 'vuex';
import searchCache from '@/assets/js/searchCache';

export default createStore({
  state: {
    searchHistory: searchCache.getAll(),
  },
  mutations: {},
  actions: {},
  modules: {},
});
