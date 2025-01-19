import {createStore} from "vuex";
import Users from "./Users"
import HelpersApi from "@/services/Helpers.js";
import Contact from "./Contact.js";
import Notifications from "@/store/Notifications.js";

export default createStore({
	modules: {
		Users,
		Contact,
		Notifications
	},

	actions: {
		getLocations() {
			return HelpersApi.getLocations()
				.then(res => res.data);
		}
	}
})