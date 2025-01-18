import {createStore} from "vuex";
import Users from "./Users"
import HelpersApi from "@/services/Helpers.js";
import Contact from "./Contact.js";

export default createStore({
	modules: {
		Users,
		Contact
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