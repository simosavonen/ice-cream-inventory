import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(VueChartkick, { adapter: Chart })

import "vue-swatches/dist/vue-swatches.min.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
