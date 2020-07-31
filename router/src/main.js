import Vue from 'vue';
import App from './App.vue';
import router from './router'; //导入路由实例

Vue.config.productionTip = false;

new Vue({
  router, //注入路由，即可在应用中使用
  render: (h) => h(App),
}).$mount('#app');
