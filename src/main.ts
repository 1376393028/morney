import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from "@/components/Icon.vue";
import '@/plugins/element';


Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


if(document.documentElement.clientWidth > 500) {
  alert('请使用手机打开页面,以保证浏览效果');
  const img = document.createElement('img');
  img.src = './qrcode.png';
  img.setAttribute('style', 'width:200px; height:200px;position: fixed; top:50%; left:50%; transform: translate(-50%, -100%); box-shadow: 0 0 10px rgba(0, 0, 0, 0.2)')
  document.body.append(img);
}