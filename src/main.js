/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from '../node_modules/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {noop} from "bootstrap/js/src/util";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin)

import {getCookie, setCookie, deleteCookie} from "@/utils.js"
import './registerServiceWorker'
console.log('1')
let smth = getCookie("token")
localStorage.setItem("token", smth)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

