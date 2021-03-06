import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "animate.css"
import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false
Vue.use(VueScrollReveal)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
