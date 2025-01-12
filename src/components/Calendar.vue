<template>
	<div>
		<v-date-picker :model-value="selectedDate"
			title="Διαθέσιμες ημερομηνίες"
			color="yellow"
			width="65%"
		/>
		<v-btn v-if="searchButtonEnabled"
			text="Αναζητηση αποτελεσματων"
			color="yellow"
			elevation="0"
			width="65%"
			@click="handleSearchClick"
		/>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name: "Calendar",

	props: {
		searchButtonEnabled: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			selectedDate: moment()
		}
	},

	methods: {
		handleSearchClick() {
			this.$router.push("/search");
		}
	}
}
</script>

<style scoped>

</style>