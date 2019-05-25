import Vue from 'vue'
import App from './App.vue'

import Table from 'buefy/dist/components/table'
import Toast from 'buefy/dist/components/toast'
import 'buefy/dist/buefy.css'
Vue.use(Table)
Vue.use(Toast)

import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(VueChartkick, { adapter: Chart })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
