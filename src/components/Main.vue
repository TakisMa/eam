<template>
	<v-container>
		<v-main>
			<v-alert
				v-model="alert.open"
				:type="alert.type"
				:text="alert.text"
				prominent
				closable
			></v-alert>
			<Breadcrumb />
			<RouterView />
		</v-main>
	</v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import HomePage from "@/components/HomePage.vue";

export default {
	name: "Main",

	components: {HomePage, Breadcrumb},

	computed: {
		alert() {
			return this.$store.getters.getAlert();
		}
	}
}
</script>

<style scoped>

</style>