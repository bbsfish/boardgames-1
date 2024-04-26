import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const dataStore = {
  state: {
    roomId: null,
    userName: 'anonymous',
    userId: null,
  },
  getters: {
    getRoomId(state) { return state.roomId; },
  },
  mutations: {
    setRoomId(state, nextRoomId) { state.roomId = nextRoomId; },
    setUserName(state, nextUserName) { state.userName = nextUserName; },
    setUserId(state, nextUserId) { state.userId = nextUserId; },
  },
  actions: {
  },
};

const dataState = createPersistedState({
  storage: window.sessionStorage,
  key: 'vuex-app-1',
  paths: [
    'userId',
  ],
});

export default createStore({
  plugins: [dataState],
  modules: {
    dataStore,
  },
});
