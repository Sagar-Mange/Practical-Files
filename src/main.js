import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* eslint-disable no-new */

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#none')
