export default {
	state: {
		alert: {
			open: false,
			type: null,
			text: null
		}
	},

	getters: {
		getAlert: (state) => () => {
			return state.alert;
		}
	},

	mutations: {
		setAlert(state, alert) {
			state.alert = alert;
		}
	}
}