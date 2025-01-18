<template>
	<div>
		<v-date-picker v-model="selectedDates"
			:allowed-dates="availableDatesArray"
			title="Διαθέσιμες ημερομηνίες"
			multiple
			show-adjacent-months
			color="#dfb833"
			width="65%"
		/>
		<v-btn v-if="searchButtonEnabled"
			text="Αναζητηση αποτελεσματων"
			color="#dfb833"
			elevation="0"
			width="65%"
			@click="handleSearchClick"
		/>
	</div>
</template>

<script>

export default {
	name: "Calendar",

	emits: ["updateDates"],

	props: {
		searchButtonEnabled: {
			type: Boolean,
			default: true
		},

		availableDatesArray: {
			type: Array,
			default:[]
		}
	},

	data() {
		return {
			selectedDates: []
		}
	},

	computed: {
		users() {
			return this.$store.getters.getUsers();
		}
	},

	methods: {
		handleSearchClick() {
			if (this.selectedDates) {
				let users = this.users.filter(user => {
					return this.selectedDates.some(d => {
						return user.availability.includes(d.format())
					})
				});

				if (users.length) {
					this.$store.commit("setFilteredUsers", users);
				}
				this.$router.push({ name: "searchPage" });
			}
			else {
				this.$router.push({ name: "searchPage" });
			}
		}
	}
}
</script>

<style scoped>

</style>