import axios from "axios";
import {createRouter} from "vue-router";

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

	userLogin(credentials) {
		return axios.post("http://localhost:3000/login", {
			params: { credentials }
		})
	}
}