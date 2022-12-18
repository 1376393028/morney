import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from "@/components/Icon.vue";
import '@/plugins/element';
import tagListModule from './modules/tagListModule';

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.config.productionTip = false;
window.tagList = tagListModule.fetch();


let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.createTag = (name) => {
  let result = tagListModule.create(name);
  if (result === 'success') {
    vm.$message({
      type: 'success',
      message: '创建成功',
      duration: 1000
    })
  } else if (result === 'duplicated') {
    vm.$message({
      type: 'error',
      message: '创建的标签已存在',
      duration: 1000
    })
  }
}

window.removeTag = (id) => {
  let result = tagListModule.remove(id);
  return result;
}

window.updateTag = (id, name) => {
  return tagListModule.update(id, name);
}

window.findTag = (id) => {
  return window.tagList.filter(item => item.id === id)[0]
}