import UsersApi from "@/services/Users"

export default {
	state: {
		loggedUser: null,
		loggedUserExtended: null,
		users: null,
		filteredUsers: null
	},

	getters: {
		getUsers: (state) => () => {
			return state.users;
		},

		getFilteredUsers: (state) => () => {
			return state.filteredUsers;
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

		loggedUserExtended: (state) => () => {
			return state.loggedUserExtended;
		},

		loggedUserID: (state) => () => {
			return state.loggedUser?.id;
		}
	},

	mutations: {
		setUsers(state, users) {
			state.users = users;
		},

		setFilteredUsers(state, users) {
			state.filteredUsers = users;
		},

		setLoggedUser(state, user) {
			state.loggedUser = user;
		},

		setLoggedUserExtended(state, user) {
			state.loggedUser = user;
		}
	},

	actions: {
		getUsers({commit}) {
			return UsersApi.getUsers()
				.then(res => {
					commit("setUsers", res.data);
					commit("setFilteredUsers", res.data);
				});
		},

		getUserExtended({ commit }, userID) {
			return UsersApi.getUserExtendedByID(userID)
				.then(res => {
					commit("setLoggedUserExtended", res.data);
				})
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
					return res.data
				});
		},

		userLogout({ commit } ) {
			commit("setLoggedUser", null);
			localStorage.removeItem("user");
		},

		resetFilteredUsers({ getters, commit }) {
			commit("setFilteredUsers", getters.getUsers());
		}
	}
}