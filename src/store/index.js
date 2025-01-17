import {createStore} from "vuex";
import Users from "./Users"
import HelpersApi from "@/services/Helpers.js";

export default createStore({
	modules: {
		Users
	},

	state: {

	},

	getters: {

	},

	mutations: {

	},

	actions: {
		getLocations() {
			return HelpersApi.getLocations()
				.then(res => res.data);
		}
	}
})