<template>
	<v-app-bar order="0" height="150" elevation="2">
		<template v-slot:prepend>
			<v-btn class="d-flex align-center" :ripple="false" @click="toHome">
				<v-img class="logo" width="285" height="150" src="@/assets/images/gov-gr-logo.png" eager/>
			</v-btn>
		</template>
		<v-spacer/>
		<v-btn color="secondary" @click="toSearch">
			Αναζήτηση
		</v-btn>
		<v-btn color="secondary">
			Ανακοινώσεις
		</v-btn>
		<v-btn color="secondary" @click="toHelp">
			Βοήθεια
		</v-btn>
		<v-btn v-if="isLoggedIn" color="secondary" @click="toProfile">
			Προφίλ
		</v-btn>
		<v-btn v-if="!isLoggedIn" color="secondary" @click="toLogin">
			Είσοδος
		</v-btn>
		<v-btn v-else color="secondary" @click="logout">
			Έξοδος
		</v-btn>
	</v-app-bar>

</template>

<script>
export default {
	name: "Header",

	computed: {
		isLoggedIn() {
			// return this.$store.getters.isLoggedIn();
			return this.$store.getters.isLoggedIn();
		}
	},

	methods: {
		toHome() {
			this.$router.push({ name: "home" });
		},

		toProfile() {
			this.$router.push({
				name: "profile",
				params: { id: this.$store.getters.loggedUserID()}
			});
		},

		toSearch() {
			this.$router.push({ name: "searchPage" });
		},

		toHelp() {
			this.$router.push({ name: "help" });
		},

		toLogin() {
			this.$router.push({ name: "login" });
		},

		logout() {
			this.$store.dispatch("userLogout");
		}
	}
}
</script>

<style scoped>
</style>