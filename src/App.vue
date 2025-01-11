<template>
	<v-app>
		<Header/>
		<HomePage />
	</v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";

export default {
	name: "App",
	components: {HomePage, Header},

	data() {
		return {}
	}
}
</script>

<style scoped>
</style>
