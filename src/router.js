import Vue from 'vue';
import router from 'vue-router';

//模块化工程需显示调用use方法安装.
Vue.use(router);

//配置路由
const routes = [
  {
    path: '/main', //这个路由映射的路径
    //import方法将路由加载的方式改为懒加载(用时才去请求)
    component: () => import('./components/Main.vue'), //这个路由映射的对应组件,路由渲染就是渲染这个组件
    children: [
      { path: 'sub1', name: 'sub1', component: () => import('./subPages/MainSub.vue') },
      { path: 'sub2', name: 'sub2', component: () => import('./subPages/MainSub2.vue') },
    ], //子组件映射,其实里面与正常路由配置一样的，因此可以无限嵌套子组件(无限套娃)
    //注意：以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
  },
  { path: '/about', component: () => import('./components/About.vue') },
  //参数传递DEMO
  { path: '/param/:user', component: () => import('./components/ParamTest.vue') }, //param方式
  { path: '/query', component: () => import('./components/QueryTest.vue') }, //query方式
  //props解构传递
  { path: '/props/:name', component: () => import('./components/PropsTest.vue'), props: true }, // 通过 route.params 传递至props
  // { path: '/props/', component: () => import('./components/PropsTest.vue'), props: {name:'Ankol'} }, //静态props
];

//导出路由实例
export default new router({
  routes, //ES6语法的简写，相当于ES5的routes:routes,
});
