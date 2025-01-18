<template>
	<v-container>
		<ParentHomePage v-if="loggedUser && loggedUser.type === UserTypes.Parent"/>
		<ProfHomePage v-else-if="loggedUser && loggedUser.type === UserTypes.Professional"/>
		<div v-else>
			<ParentHomePage />
			<v-divider />
			<ProfHomePage />
		</div>
	</v-container>

</template>

<script>
import ButtonGroup from "@/components/ButtonGroup.vue";
import Calendar from "@/components/Calendar.vue";
import ParentHomePage from "@/components/ParentHomePage.vue";
import ProfHomePage from "@/components/ProfHomePage.vue";
import UserTypes from "@/enums/UserTypes.js";

export default {
	name: "HomePage",

	components: {ProfHomePage, ParentHomePage, Calendar, ButtonGroup},

	data() {
		return {
			selectedDates: []
		}
	},

	computed: {
		UserTypes() {
			return UserTypes
		},
		loggedUser() {
			return this.$store.getters.loggedUser();
		}
	}
}
</script>

<style scoped>

</style>