import "vuetify/styles"
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from "vuetify";
import * as directives from "vuetify/directives";

import MomentAdapter from "@date-io/moment";

export default createVuetify({
	icons: {
		defaultSet: "mdi", //This is already the default value - only for display purposes
	},
	theme: {
		// todo: enable dark theme option
		// defaultTheme: store.getters.darkMode() ? "dark" : "light",
		defaultTheme: "light",
		themes: {
			light: {
				dark: false,
				colors: {
					background: "#F7F7F7",
					surface: "#FFFFFF",
					"on-surface": "#27292d",
					'on-surface-variant': "#FFFFFF",
					"surface-variant": "#333333",
					primary: "#62AA7B",
					secondary: "#288BD3",
					success: "#3DB868",
					error: "#E22C3A"
				},
				variables: {
					"high-emphasis-opacity": 1,
					"hover-opacity": 0.08
				}
			},
			//todo: configure to enable dark theme option
			// dark: {
			// 	dark: true,
			// 	colors: {
			// 		background: "#3F4447",
			// 		surface: "#27292D",
			// 		"on-surface": "#FFFFFF",
			// 		'on-surface-variant': "#27292D",
			// 		"surface-variant": "#333333",
			// 		primary: "#3DB868",
			// 		secondary: "#00C0FA",
			// 		"on-secondary": "#FFFFFF",
			// 		success: "#3DB868",
			// 		error: "#E22C3A"
			// 	},
			// 	variables: {
			// 		"high-emphasis-opacity": 1,
			// 		"hover-opacity": 0.08
			// 	}
			// }
		}
	},
		display: {
			thresholds: {
				xl: 1780
			}
		},
	date: {
		adapter: MomentAdapter
	},
	directives
});