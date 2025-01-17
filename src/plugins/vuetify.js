import "vuetify/styles"
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from "vuetify";
import * as components from "vuetify/components"
import * as directives from "vuetify/directives";

import MomentAdapter from "@date-io/moment";

export default createVuetify({
	icons: {
		defaultSet: "mdi", //This is already the default value - only for display purposes
	},
	theme: {
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
					primary: "#FFA000FF",
					secondary: "#FAEFC0FF",
					success: "#3DB868",
					error: "#E22C3A"
				},
				variables: {
					"high-emphasis-opacity": 1,
					"hover-opacity": 0.08
				}
			}
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
	components,
	directives
});