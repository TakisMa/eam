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

	getDraft(userID) {
		return axios.get("http://localhost:3000/contact/draft", {
			params: { userID }
		});
	},

	clearDraft(userID) {
		return axios.delete("http://localhost:3000/contact/draft", {
			params: { userID }
		});
	},

	saveFinalDocument(userID, document) {
		return axios.post("http://localhost:3000/contact/final", {
			params: {
				userID,
				document
			}
		})
	},

	getDocument(userID) {
		return axios.get("http://localhost:3000/contact/document", {
			params: { userID }
		});
	}
}