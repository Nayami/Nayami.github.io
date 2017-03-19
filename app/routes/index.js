var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)

var Home = require('./Home.vue')
var About = require('./About.vue')

module.exports = new VueRouter({
	mode: 'history',
	routes :[
		{ path: '/', component: Home },
		{ path: '/about', component: About }
	]
})