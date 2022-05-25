import Vue from 'vue'
import App from './App.vue'
import LandingHeader from  './components/LandingHeader'

Vue.config.productionTip = false
Vue.component('app-landing-header',LandingHeader)

new Vue({
  render: h => h(App),
  
}).$mount('#app')
