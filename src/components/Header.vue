<template>
	<v-app-bar order="0" height="150" elevation="2">
		<template v-slot:prepend>
			<v-btn class="d-flex align-center" :ripple="false" @click="toHome">
				<v-img class="logo" width="285" height="150" src="@/assets/images/gov-gr-logo.png" eager/>
			</v-btn>
		</template>
		<v-spacer/>
		<v-btn color="secondary">
			Ανακοινώσεις
		</v-btn>
		<v-btn color="secondary" @click="toHelp">
			Βοήθεια
		</v-btn>
		<v-btn v-if="isLoggedIn" color="secondary" @click="toProfile">
			Προφίλ
		</v-btn>
		<v-btn color="secondary">
			Είσοδος
		</v-btn>
	</v-app-bar>

</template>

<script>
export default {
	name: "Header",

	computed: {
		isLoggedIn() {
			// return this.$store.getters.isLoggedIn();
			return false;
		}
	},

	methods: {
		toHome() {
			this.$router.push({ name: "home" });
		},

		toProfile() {
			this.$router.push({ name: "profile" });
		},

		toHelp() {
			this.$router.push({ name: "help" });
		}
	}
}
</script>

<style scoped>
</style>