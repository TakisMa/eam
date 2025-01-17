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
		component: HomePage
	},
	{
		path: '/search',
		name: 'searchPage',
		component: SearchPage
	},
	{
		path: '/profile/:id',
		name: 'profile',
		component: Profile
	},
	{
		path: '/help',
		name: 'help',
		component: HelpPage
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage
	},
	{
		path: '/contact?:targetID',
		name: 'contactForm',
		component: ContactFormPage
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
