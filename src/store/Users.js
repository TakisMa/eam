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
			return UsersAPI.getUsers()
				.then(res => {
					commit("setUsers", res.data);
				})
			// const users = UsersAPI.getUsers()
			// commit("setUsers", users);
		},

		getUserByID({getters, commit}, userID){
			if (!getters.getUsers()) {
				const users = UsersAPI.getUsers();
				commit("setUsers", users);

				return getters.getUserByID(userID);
			}
			else {
				getters.getUserByID(userID);
			}
		}
	}
}