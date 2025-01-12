import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/components/HomePage.vue";
import SearchPage from "@/components/SearchPage.vue";
import Profile from "@/components/Profile.vue";

const routes = [
	{path: '/', component: HomePage},
	{path: '/search', component: SearchPage},
	{
		path: '/profile/:id',
		name: 'profile',
		component: Profile
	},
]

export default createRouter({
	history: createWebHistory(),
	routes
})
