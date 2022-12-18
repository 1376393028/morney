import Vue from 'vue';
import Vuex from 'vuex';
import clone from "@/utils/clone";
const localStorageName = 'recordList';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[]
  },
  mutations: {
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdATt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecord');
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    },
    saveRecord(state) {
      localStorage.setItem(localStorageName, JSON.stringify(state.recordList));
    }
  }
})

export default store;
