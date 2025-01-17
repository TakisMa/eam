import axios from "axios";

export default {
	saveDraft(userID, draft) {
		return axios.post("http://localhost:3000/contact", {
			params: {
				userID,
				draft
			}
		})
	},

	getDraft(userID) {
		return axios.get("http://localhost:3000/contact", {
			params: { userID }
		});
	}
}