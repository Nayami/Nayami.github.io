window.Vuex = require('vuex')
window.VueResource = require('vue-resource')
window.VueMaterial = require('vue-material')
window.eventHub = new Vue()
Vue.use(VueMaterial)

Vue.material.registerTheme({
	default: {
		primary: {
			color: 'blue-grey',
			hue: 600
		},
		accent: {
			color: 'blue'
		},
		warn: {
			color: 'red'
		}
	}
})


var store = require('./store')
var router = require('./routes')

Vue.component('entry-point', require('./index.vue'))
Vue.component('navigation', require('./components/Nav.vue'))

new Vue({

	'router': router,

	el: '#appEntry',

	data: {
		applicationName: "My Application"
	},

	created: function() {
		var vm = this;

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