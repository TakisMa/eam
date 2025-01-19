import axios from "axios";

export default {
	getUsers() {
		return axios.get("http://localhost:3000/search");
	},

	getUsersWithFilters(filters) {
		return axios.get("http://localhost:3000/paramsSearch", {
			params: { filters: JSON.stringify(filters) }
		})
	},

	getUserByID(id) {
		return axios.get("http://localhost:3000/profile", {
			params: { id }
		})
	},

	getUserExtendedByID(id) {
		return axios.get(`http://localhost:3000/user/${id}/extended`)
	},

	userLogin(credentials) {
		return axios.post("http://localhost:3000/login", {
			params: { credentials }
		})
	},

	updateUserInfo(user, userExtended) {
		return axios.patch("http://localhost:3000/user", {
			params: { user }
		})
	},

	updateUserExtendedInfo(userExtended) {
		return axios.patch("http://localhost:3000/user/extended", {
			params: { userExtended }
		})
	}
}