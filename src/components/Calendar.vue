<template>
	<div>
		<v-date-picker :model-value="selectedDate"
			title="Διαθέσιμες ημερομηνίες"
			color="yellow"
			width="65%"
		/>
		<v-btn
			text="Αναζητηση αποτελεσματων"
			color="yellow"
			elevation="0"
			width="65%"
		/>
	</div>
</template>

<script>
import moment from "moment";

export default {
	name: "Calendar",

	data() {
		return {
			selectedDate: moment()
		}
	}
}
</script>

<style scoped>

</style>