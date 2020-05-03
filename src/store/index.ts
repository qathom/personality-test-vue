import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '../../types';
import test from './modules/test';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    test,
  },
};

export default new Vuex.Store<RootState>(store);
