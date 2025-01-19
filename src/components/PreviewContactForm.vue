<template>
	<v-container class="d-flex justify-center">
		<v-card width="530">
			<v-card-item>
				<h2>
					Προεπισκόπηση Αίτησης Συνεργασίας
				</h2>
			</v-card-item>

			<v-card-text>
				<v-row>
					<v-col>
						<v-text-field
							:model-value="document.email"
							placeholder="E-mail"
							variant="outlined"
							label="E-mail"
							required
							disabled
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-text-field
							:model-value="document.name"
							placeholder="Όνομα"
							variant="outlined"
							label="Όνομα"
							required
							disabled
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-text-field
							:model-value="document.surname"
							placeholder="Επίθετο"
							variant="outlined"
							label="Επίθετο"
							required
							disabled
						></v-text-field>
					</v-col>
				</v-row>
				<v-divider class="my-3" thickness="2"/>
				<v-row>
					<v-col>
						<v-text-field
							:model-value="document.adt"
							placeholder="ΑΔΤ"
							variant="outlined"
							label="ΑΔΤ"
							required
							disabled
						></v-text-field>
					</v-col>
					<v-col>
						<v-text-field
							:model-value="document.amka"
							placeholder="ΑΜΚΑ"
							variant="outlined"
							label="ΑΜΚΑ"
							required
							disabled
						></v-text-field>
					</v-col>
					<v-col>
						<v-text-field
							:model-value="document.afm"
							placeholder="ΑΦΜ"
							variant="outlined"
							label="ΑΦΜ"
							required
							disabled
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-text-field
							:model-value="document.phone"
							placeholder="Τηλέφωνο Επικοινωνίας"
							variant="outlined"
							label="Τηλέφωνο Επικοινωνίας"
							required
							disabled
						></v-text-field>
					</v-col>
					<v-col>
						<v-text-field
							:model-value="document.dateOfBirth?.format('DD / MM / YYYY')"
							placeholder="Ημερομηνίας Γέννησης"
							variant="outlined"
							label="Ημερομηνίας Γέννησης"
							append-inner-icon="mdi-calendar"
							hide-details
							disabled
							readonly
						></v-text-field>
					</v-col>
				</v-row>

				<v-textarea
					:model-value="document.additionalInfo"
					variant="outlined"
					placeholder="Επιπλέον πληροφορίες"
					label="Επιπλέον πληροφορίες"
					disabled
				></v-textarea>

				<v-row>
					<v-col>
						<v-btn
							class="mt-4"
							text="Αποστολή στο e-mail"
							color="primary"
							block
							@click=""
						></v-btn>
					</v-col>
					<v-col>
						<v-btn
							class="mt-4"
							text="Αποθήκευση PDF"
							color="secondary"
							block
							@click=""
						></v-btn>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
import moment from "moment";

export default {
	name: "PreviewContactForm",

	computed: {
		document() {
			return this.$store.getters.getFinalizedContact()
		}
	},
}
</script>

<style scoped>

</style>