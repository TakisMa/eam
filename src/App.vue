<template>
	<v-app>
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

	mounted() {
		const user = JSON.parse(localStorage.getItem("user"));

		if (user) {
			this.$store.commit("setLoggedUser", user);
		}
	}
}
</script>

<style scoped>
</style>
