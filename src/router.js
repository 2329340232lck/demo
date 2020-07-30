import Vue from 'vue';
import router from 'vue-router';
// 导入组件
import MAIN from './components/Main.vue';
import ABOUT from './components/About.vue';
import main1 from './subPages/MainSub.vue';
import main2 from './subPages/MainSub2.vue';

//模块化工程需显示调用use方法安装.
Vue.use(router);

//配置路由
const routes = [
  {
    path: '/main', //这个路由映射的路径
    component: MAIN, //这个路由映射的对应组件,路由渲染就是渲染这个组件
    children: [{ path: 'sub1', component: main1 }, { path: 'sub2', component: main2 }], //子组件映射,其实里面与正常路由配置一样的，因此可以无限嵌套子组件(无限套娃)
    //注意：以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
  },
  { path: '/about', component: ABOUT },
];

//导出路由实例
export default new router({
  routes, //ES6语法的简写，相当于ES5的routes:routes,
});
