import UsersApi from "@/services/Users"

export default {
	state: {
		loggedUser: null,
		users: null
	},

	getters: {
		getUsers: (state) => () => {
			return state.users;
		},

		getUserByID: (state) => (id) => {
			return state.users?.find(u => u.id === id);
		},

		isLoggedIn: (state) => () => {
			return !!state.loggedUser;
		},

		loggedUser: (state) => () => {
			return state.loggedUser;
		},

		loggedUserID: (state) => () => {
			return state.loggedUser?.id;
		}
	},

	mutations: {
		setUsers(state, users) {
			state.users = users;
		},

		setLoggedUser(state, user) {
			state.loggedUser = user;
		}
	},

	actions: {
		getUsers({commit}) {
			return UsersApi.getUsers()
				.then(res => {
					commit("setUsers", res.data);
				});
		},
		
		getUsersWithFilters({ commit }, filters) {
			return UsersApi.getUsersWithFilters(filters)
				.then(res => {
					commit("setUsers", res.data);
				});
		},

		getUserByID({getters, commit}, userID){
			return UsersApi.getUserByID(userID)
				.then(res => res.data);
		},

		userLogin({ commit }, credentials) {
			return UsersApi.userLogin(credentials)
				.then(res => {
					commit("setLoggedUser", res.data);
				});
		},

		userLogout({ commit } ) {
			commit("setLoggedUser", null);
		}
	}
}