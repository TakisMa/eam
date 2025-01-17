import DraftApi from "@/services/DraftContact"

export default {
	state: {
		draft: null
	},

	getters: {
		getDraft: (state) => () => {
			return state.draft;
		}
	},

	mutations: {
		setDraft(state, draft) {
			state.draft = draft;
		}
	},

	actions: {
		saveDraft({ commit }, { userID, draft }) {
			return DraftApi.saveDraft(userID, draft)
				.then(res => {
					commit("setDraft", res.data);
				})
		},

		getDraft({ commit }, userID) {
			return DraftApi.getDraft(userID)
				.then(res => {
					commit("setDraft", res.data);
				})
		}
	}
}