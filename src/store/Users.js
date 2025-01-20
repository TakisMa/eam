import UsersApi from "@/services/Users"

export default {
	state: {
		loggedUser: null,
		loggedUserExtended: null,
		users: null,
		filteredUsers: null,
		userProfile: null
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
		},

		getUserProfile: (state) => () => {
			return state.userProfile;
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
			state.loggedUser = {...state.loggedUser, ...user};
		},

		setLoggedUserExtended(state, user) {
			state.loggedUserExtended = {...state.loggedUserExtended, ...user};
		},

		setUserProfile(state, user) {
			state.userProfile = {...state.userProfile, ...user};
		},

		clearUser(state) {
			state.loggedUser = null;
			state.loggedUserExtended = null;
			state.userProfile = null;
		}
	},

	actions: {
		getUsers({commit}) {
			return UsersApi.getUsers()
				.then(res => {
					commit("setUsers", res.data);
					commit("setFilteredUsers", res.data);
					return res.data;
				});
		},

		getUserExtended({ commit }, userID) {
			return UsersApi.getUserExtendedByID(userID)
				.then(res => res.data);
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

		userLogout({ commit }) {
			commit("clearUser");
			localStorage.removeItem("user");
		},

		resetFilteredUsers({ getters, commit }) {
			commit("setFilteredUsers", getters.getUsers());
		},

		updateUserInfo({ commit }, userInfo) {
			return UsersApi.updateUserInfo(userInfo)
				.then(res => commit("setLoggedUser", res.data));
		},

		updateUserExtendedInfo({ commit }, userInfoExtended) {
			return UsersApi.updateUserExtendedInfo(userInfoExtended)
				.then(res => commit("setLoggedUserExtended", res.data));
		}
	}
}