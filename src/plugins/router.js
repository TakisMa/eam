import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import SearchPage from "@/components/SearchPage.vue";
import Profile from "@/components/Profile.vue";
import HelpPage from "@/components/HelpPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import ContactFormPage from "@/components/ContactFormPage.vue";
import PreviewContactForm from "@/components/PreviewContactForm.vue";

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
		path: '/contact?:targetID&:continueFromDraft',
		name: 'contactForm',
		component: ContactFormPage,
		meta: { breadcrumb: "Contact Form" }
	},
	{
		path: '/preview',
		name: 'preview',
		component: PreviewContactForm,
		meta: { breadcrumb: "Preview" }
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
