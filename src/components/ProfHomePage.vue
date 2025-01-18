<template>
	<v-row class="my-4">
		<h2> Για τους επαγγελματίες </h2>
	</v-row>
	<v-row class="d-flex flex-wrap justify-center align-center my-4" style="height: 520px;">
		<v-col cols="4">
			<ButtonGroup
				:central-button-options="profButtonOptions.centralButton"
				:lower-left-button-options="profButtonOptions.lowerLeftButton"
				:lower-right-button-options="profButtonOptions.lowerRightButton"
			/>
		</v-col>
	</v-row>
</template>

<script>
import ButtonGroup from "@/components/ButtonGroup.vue";

export default {
	name: "ProfHomePage",

	components: {ButtonGroup},

	computed: {
		isLoggedIn() {
			return this.$store.getters.isLoggedIn();
		},

		profButtonOptions() {
			return {
				centralButton: {
					title: this.isLoggedIn ? "Προβολή προφίλ" : "Είσοδος Επαγγελματιων",
					action: this.isLoggedIn ? this.toProfile : this.toLogin,
					icon: this.isLoggedIn ? "mdi-account-circle-outline" : "mdi-arrow-right-circle-outline",
					color: "#ffa000"
				},
				lowerLeftButton: {
					title: "Δημιουργία Βιογραφικού",
					icon: "mdi-script-outline",
					color: "#faefc0"
				},
				lowerRightButton: {
					title: "Πληροφορίες Επαγγελματιών",
					icon: "mdi-help",
					color: "#faefc0"
				}
			}
		}
	},

	methods: {
		toProfile() {
			this.$router.push({
				name: "profile",
				params: {id: this.$store.getters.loggedUserID()}
			})
		},

		toLogin() {
			this.$router.push({name: "login"});
		}
	}
}
</script>

<style scoped>

</style>