import axios from "axios";

export default {
	saveDraft(userID, draft) {
		return axios.post("http://localhost:3000/contact/draft", {
			params: {
				userID,
				draft
			}
		})
	},

	saveFinalDocument(userID, document) {
		return axios.post("http://localhost:3000/contact/final", {
			params: {
				userID,
				document
			}
		})
	},

	getDraft(userID) {
		return axios.get("http://localhost:3000/contact/draft", {
			params: { userID }
		});
	},

	getDocument(userID) {
		return axios.get("http://localhost:3000/contact/document", {
			params: { userID }
		});
	}
}