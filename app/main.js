window.Vuex = require('vuex');
window.VueResource = require('vue-resource')
window.VueMaterial = require('vue-material')
window.eventHub = new Vue()
Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
	primary: {
		color: 'teal',
		hue: 900
	},
	accent: {
		color: 'amber',
		hue: 900
	},
	warn: {
		color: 'red',
		hue: 700
	}
});

let store = require('./store')
let router = require('./routes')

Vue.component('entry-point', require('./index.vue'))
Vue.component('navigation', require('./components/Nav.vue'))

new Vue({

	'router': router,

	el: '#appEntry',

	data: {
		applicationName: "My Application"
	},

	created: function() {
		let vm = this;

		this.$http.get('/process/processor.php')
			.then(function(response) {
				store.commit('setUsers', [response.body]);

			}, function(error) {
				console.log(error);
			});

	},

	methods: {

	},

	computed: {
		appTitle: function() {
			return store.state.documentTitle
		}
	},

	watch: {
		'appTitle': function(data) {
			document.title = data
		}
	}

})