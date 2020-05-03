import {
  Module,
  ActionTree,
  MutationTree,
  GetterTree,
} from 'vuex';

import {
  RootState,
  PersonalityTestState,
  AddSelectionPayload,
} from '../../../../types';

export const moduleState: PersonalityTestState = {
  startedAt: null,
  groupNumber: -1,
  selection: new Map<number, number>(),
};

export const SET_GROUP_NUMBER = 'SET_GROUP_NUMBER';
export const ADD_SELECTION = 'ADD_SELECTION';

export const getters: GetterTree<PersonalityTestState, RootState> = {
  groupNumber(state: PersonalityTestState): number {
    return state.groupNumber;
  },
  selection(state: PersonalityTestState): Map<number, number> {
    return state.selection;
  },
};

export const actions: ActionTree<PersonalityTestState, RootState> = {
  setGroupNumber({ commit }, payload: number) {
    commit(SET_GROUP_NUMBER, payload);
  },
  addSelection({ commit }, payload: AddSelectionPayload) {
    commit(ADD_SELECTION, payload);
  },
};

export const mutations: MutationTree<PersonalityTestState> = {
  [SET_GROUP_NUMBER](state, payload: number) {
    state.groupNumber = payload;
  },
  [ADD_SELECTION](state, payload: AddSelectionPayload) {
    state.selection.set(payload.groupdId, payload.value);
  },
};

const namespaced = false;

const store: Module<PersonalityTestState, RootState> = {
  namespaced,
  state: moduleState,
  getters,
  actions,
  mutations,
};

export default store;
