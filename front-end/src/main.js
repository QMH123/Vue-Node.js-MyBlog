// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mavonEditor from 'mavon-editor'
import request from './request'
import axios from 'axios'
import marked from 'marked'
import 'mavon-editor/dist/css/index.css'
import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css' 

Vue.use(ElementUI)
Vue.use(mavonEditor)
// Vue.use(axios)
Vue.prototype.$request = request
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
