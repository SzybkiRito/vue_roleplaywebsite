import Vue from 'vue'
import App from './App'
import router from './router'
import AOS from 'aos'

Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'aos/dist/aos.css'

new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount("#app");
