import Vue from 'vue'

import Vuetify from 'vuetify'

import App from './App'

import './style/style.stylus'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
}).$mount('#app')
