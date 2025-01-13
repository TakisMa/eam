import UsersAPI from "@/services/Users"

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
			const users = UsersAPI.getUsers()
			commit("setUsers", users);
		}
	}
}