import UsersApi from "@/services/Users"

export default {
	state: {
		users: null
	},

	getters: {
		getUsers: (state) => () => {
			return state.users;
		},

		getUserByID: (state) => (id) => {
			return state.users?.find(u => u.id === id);
		}
	},

	mutations: {
		setUsers(state, users) {
			state.users = users;
		}
	},

	actions: {
		getUsers({commit}) {
			return UsersApi.getUsers()
				.then(res => {
					commit("setUsers", res.data);
				})
		},
		
		getUsersWithFilters({ commit }, filters) {
			return UsersApi.getUsersWithFilters(filters)
				.then(res => {
					// const data = res.data.map(d => JSON.parse(d.additionalInfo));
					commit("setUsers", res.data);
				})
		},

		getUserByID({getters, commit}, userID){
			return UsersApi.getUserByID(userID)
				.then(res => res.data);
		}
	}
}