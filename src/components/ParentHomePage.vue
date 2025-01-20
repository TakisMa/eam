<template>
	<v-row class="my-4">
		<h2> Για τους κηδεμόνες </h2>
	</v-row>
	<v-row class="d-flex align-center">
		<v-col>
			<ButtonGroup
				:central-button-options="parentButtonOptions.centralButton"
				:lower-left-button-options="parentButtonOptions.lowerLeftButton"
				:lower-right-button-options="parentButtonOptions.lowerRightButton"
			/>
		</v-col>

		<v-col>
			<v-row class="d-flex justify-center">
				<h1>
					Ο γονιός δε μπορεί... <br/>
					Η νταντά είναι εκεί
				</h1>
			</v-row>
			<v-row class="d-flex justify-center">
				<h2>
					Πρόγραμμα φροντίδας παιδιών <br/>
					ηλικίας 2 μηνών έως 2.5 ετών
				</h2>
			</v-row>
		</v-col>
		<v-col>
			<Calendar
				:available-dates-array="availableDates"
			/>
		</v-col>
	</v-row>

</template>

<script>
import ButtonGroup from "@/components/ButtonGroup.vue";
import Calendar from "@/components/Calendar.vue";

export default {
	name: "ParentHomePage",

	components: {Calendar, ButtonGroup},

	data() {
		return {
			availableDates: [],
		}
	},

	computed: {
		isLoggedIn() {
			return this.$store.getters.isLoggedIn();
		},

		parentButtonOptions() {
			return {
				centralButton: {
					title: this.isLoggedIn ? "Προβολή Προφίλ" : "Είσοδος Κηδεμόνες",
					action: this.isLoggedIn ? this.toProfile : this.toLogin,
					icon: this.isLoggedIn ? "mdi-account-circle-outline" : "mdi-arrow-right-circle-outline",
					color: this.isLoggedIn ? "#D5B635FF" : "#3f8747"
				},
				lowerLeftButton: {
					title: "Λήψη Voucher",
					icon: "mdi-currency-usd",
					enabled: this.isLoggedIn,
					color: this.isLoggedIn ? "#faefc0" : "#CFF7D3",
				},
				lowerRightButton: {
					title: "Πληροφορίες Συνοδών",
					icon: "mdi-help",
					color: this.isLoggedIn ? "#faefc0" : "#CFF7D3"
				},
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
	},

	mounted() {
		if (!this.$store.getters.getUsers()) {
			this.$store.dispatch("getUsers")
				.then(() => {
					const users = this.$store.getters.getUsers();
					this.availableDates = users.reduce((acc, user) => acc.concat(user.availability), []);
				})
		}
		else {
			const users = this.$store.getters.getUsers();
			this.availableDates = users.reduce((acc, user) => acc.concat(user.availability), []);
		}
	}
}
</script>

<style scoped>

</style>