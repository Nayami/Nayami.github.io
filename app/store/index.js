module.exports = new Vuex.Store({

	state: {
		users        : [],
		documentTitle: ''
	},

	mutations: {

		setUsers: function(state, data) {
			state.users = data
		},

		appendUser: function(state, data) {
			state.users.push(data)
		},

		// Title
		setTitle: function(state, data) {
			state.documentTitle = data
		}

	}

})