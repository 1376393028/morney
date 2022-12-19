import Vue from 'vue';
import Vuex from 'vuex';
import clone from "@/utils/clone";
import router from '@/router';
const localStorageRecordName = 'recordList';
const localStorageTagName = 'tagList';


Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(localStorage.getItem(localStorageRecordName) || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdATt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      localStorage.setItem(localStorageRecordName, JSON.stringify(state.recordList));
    },

    fetchTags(state) {
      state.tagList = JSON.parse(localStorage.getItem(localStorageTagName) || '[]');
    },
    createTag(state, name) {
      const names = state.tagList.map((item) => item.name)
      if (names.indexOf(name) >= 0) {
        alert('创建的标签已存在');
        return
      }
      state.tagList.push({ id: Date.now().toString(), name });
      store.commit('saveTags');
      alert('创建成功');
    },
    saveTags(state) {
      localStorage.setItem(localStorageTagName, JSON.stringify(state.tagList));
    },
    setCurrentTag(state, id) {
      state.currentTag = state.tagList.filter(item => item.id === id)[0]
    },
    updateTag(state, name) {
      let tag = state.currentTag;
      if (tag) {
        const names = state.tagList.map((item) => item.name)
        if (names.indexOf(name) >= 0) {
          console.log('标签名重复');
        } else {
          tag.name = name;
          store.commit('saveTags');
        }
      }
    },
    removeTag(state, id) {
      state.tagList = state.tagList.filter(item => item.id !== id);
      store.commit('saveTags');
      alert('删除成功');
      state.currentTag = undefined;
      router.back();
    },
  }
})

export default store;
