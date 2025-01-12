<template>
	<v-container>
		<v-row>
			<v-col>
				<ButtonGroup
					:central-button-options="buttonOptions.centralButton"
					:lower-left-button-options="buttonOptions.lowerLeftButton"
					:lower-right-button-options="buttonOptions.lowerRightButton"
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

			</v-col>
		</v-row>
		<v-row>

		</v-row>
	</v-container>

</template>

<script>
import ButtonGroup from "@/components/ButtonGroup.vue";

export default {
	name: "HomePage",
	components: {ButtonGroup},

	data() {
		return {
			buttonOptions: {
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
			}
		}
	}
}
</script>

<style scoped>

</style>