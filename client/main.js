var Vue = require('vue')
var css = require('./app.css')

import HeaderNav from './components/layouts/header-nav/index.js'
import Home from './components/pages/home/index.js'
import About from './components/pages/about/index.js'
// // var App = require('./app.js')
var VueRouter = require('vue-router')

// Registering middleware
Vue.use(VueRouter)

// bootstrapping the instance
var App = Vue.extend({
  components: {
    HeaderNav
  },
  template: require('./app.html')
})
// End of setting up vue

// Routing below...
var options = {
  hashbang: false
}

var router = new VueRouter({
  hashbang: true
})

router.map({
    '/': {
      component: Home
    },
    '/about': {
      component: About
    }
})

router.start(App, '#app')
// End of routing
