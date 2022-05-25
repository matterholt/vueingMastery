import Vue from 'vue'
import App from './App.vue'
import router from './router'
import LandingHeader from  './components/LandingHeader'

Vue.config.productionTip = false
Vue.component('app-landing-header',LandingHeader)



new Vue({
  router,
  render: h => h(App),
  
}).$mount('#app')
