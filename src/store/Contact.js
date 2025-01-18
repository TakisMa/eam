import ContactApi from "@/services/Contact.js"

export default {
	state: {
		draft: null,
		finalizedContact: null
	},

	getters: {
		getDraft: (state) => () => {
			return state.draft;
		},
		
		getFinalizedContact: (state) => () => {
			return state.finalizedContact;
		}
	},

	mutations: {
		setDraft(state, draft) {
			state.draft = draft;
		},
		
		setFinalizedContact(state, document) {
			state.finalizedContact = document;
		}
	},

	actions: {
		getDraft({ commit }, userID) {
			return ContactApi.getDraft(userID)
				.then(res => {
					commit("setDraft", res.data);
					return res;
				});
		},

		saveDraft({ commit }, { userID, draft }) {
			return ContactApi.saveDraft(userID, draft)
				.then(res => {
					commit("setDraft", res.data);
					return res;
				});
		},

		clearDraft({ commit }, { userID }) {
			return ContactApi.clearDraft(userID)
				.then(res => {
					commit("setDraft", null)
					return res;
				});
		},

		saveFinal({ commit }, { userID, document }) {
			return ContactApi.saveFinalDocument(userID, document)
				.then(res => {
					commit("setFinalizedContact", res.data);
					return res;
				})
		},

		getFinalizedContact({ commit }, userID) {
			return ContactApi.getDocument(userID)
				.then(res => {
					commit("setFinalizedContact", res.data);
					return res;
				})
		}
	}
}