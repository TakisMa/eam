import {createStore} from "vuex";
import Users from "./Users"
import HelpersApi from "@/services/Helpers.js";
import DraftContact from "./DraftContact.js";

export default createStore({
	modules: {
		Users,
		DraftContact
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