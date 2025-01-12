<template>
	<v-app>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/search">Search</RouterLink>
		</nav>
		<Header/>
		<Main />
	</v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
	name: "App",
	components: {Main, Header},

	data() {
		return {}
	}
}
</script>

<style scoped>
</style>
