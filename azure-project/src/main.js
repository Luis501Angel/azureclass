// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import DogsForm from './components/DogsForm'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '', component: App } 
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
},{
  el: '#dogs',
  router,
  components: { DogsForm },
  template: '<DogsForm/>'
}
)
