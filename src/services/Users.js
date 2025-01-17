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
	}
}