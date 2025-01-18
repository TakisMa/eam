import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import SearchPage from "@/components/SearchPage.vue";
import Profile from "@/components/Profile.vue";
import HelpPage from "@/components/HelpPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import ContactFormPage from "@/components/ContactFormPage.vue";

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
		meta: { breadcrumb: "Home" }
	},
	{
		path: '/search',
		name: 'searchPage',
		component: SearchPage,
		meta: { breadcrumb: "Search" }
	},
	{
		path: '/profile/:id',
		name: 'profile',
		component: Profile,
		meta: { breadcrumb: "Profile" }
	},
	{
		path: '/help',
		name: 'help',
		component: HelpPage,
		meta: { breadcrumb: "Help" }
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage,
		meta: { breadcrumb: "Login" }
	},
	{
		path: '/contact?:targetID',
		name: 'contactForm',
		component: ContactFormPage,
		meta: { breadcrumb: "Contact Form" }
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
