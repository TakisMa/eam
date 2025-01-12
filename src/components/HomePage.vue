<template>
	<v-container>
		<v-row class="my-4">
			<h2>
				Για τους κηδεμόνες
			</h2>
		</v-row>
		<v-row>
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
				<Calendar/>
			</v-col>
		</v-row>

		<v-divider class="my-4" thickness="4"/>

		<v-row class="my-4">
			<h2>
				Για τους επαγγελματίες
			</h2>
		</v-row>
		<v-row class="d-flex flex-wrap justify-center my-4">
			<v-col cols="4">
				<ButtonGroup
					:central-button-options="profButtonOptions.centralButton"
					:lower-left-button-options="profButtonOptions.lowerLeftButton"
					:lower-right-button-options="profButtonOptions.lowerRightButton"
				/>
			</v-col>
		</v-row>
	</v-container>

</template>

<script>
import ButtonGroup from "@/components/ButtonGroup.vue";
import Calendar from "@/components/Calendar.vue";

export default {
	name: "HomePage",
	components: {Calendar, ButtonGroup},

	data() {
		return {
			parentButtonOptions: {
				centralButton: {
					title: "Είσοδος Κηδεμόνες",
					icon: "mdi-arrow-right-circle-outline",
					color: "#009951"
				},
				lowerLeftButton: {
					title: "Λήψη Voucher",
					icon: "mdi-currency-usd",
					color: "#CFF7D3"
				},
				lowerRightButton: {
					title: "Πληροφορίες Συνοδών",
					icon: "mdi-help",
					color: "#CFF7D3"
				},
			},
			profButtonOptions: {
				centralButton: {
					title: "Είσοδος Επαγγελματιων",
					icon: "mdi-arrow-right-circle-outline",
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
				},
			}
		}
	}
}
</script>

<style scoped>

</style>