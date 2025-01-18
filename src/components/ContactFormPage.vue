<template>
	<v-container class="d-flex justify-center">
		<v-card width="530">
			<v-card-item>
				<h2>
					Υποβολή Αίτησης Συνεργασίας
				</h2>
			</v-card-item>

			<v-card-text>
				<v-form ref="form" v-model="valid">
					<v-row>
						<v-col>
							<h4>
								Στοιχεία Κηδεμόνα
							</h4>
						</v-col>
						<v-col>
							<h4>
								Στοιχεία Επαγγελματία
							</h4>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-text-field
								v-model="email"
								placeholder="E-mail"
								:rules="emailRules"
								:disabled="autoImport"
								required
							></v-text-field>
						</v-col>
						<v-col>
							<v-text-field
								:model-value="targetUser?.email"
								disabled
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-text-field
								v-model="name"
								placeholder="Όνομα"
								:disabled="autoImport"
								required
							></v-text-field>
						</v-col>
						<v-col>
							<v-text-field
								:model-value="targetUser?.name"
								disabled
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-text-field
								v-model="surname"
								placeholder="Επίθετο"
								:disabled="autoImport"
								required
							></v-text-field>
						</v-col>
						<v-col>
							<v-text-field
								:model-value="targetUser?.surname"
								disabled
							></v-text-field>
						</v-col>
					</v-row>
					<v-divider class="my-3" thickness="2"/>
					<v-text-field
						v-model="adt"
						placeholder="ΑΔΤ"
						:disabled="autoImport"
					></v-text-field>
					<v-text-field
						v-model="amka"
						placeholder="ΑΜΚΑ"
						:disabled="autoImport"
					></v-text-field>
					<v-text-field
						v-model="afm"
						placeholder="ΑΦΜ"
						:disabled="autoImport"
					></v-text-field>
					<v-textarea
						v-model="additionalInfo"
						placeholder="Επιπλέον πληροφορίες"
					></v-textarea>

					<v-checkbox
						v-model="autoImport"
						label="Χρήση στοιχείων προφίλ (Απαιτείται σύνδεση)"
						:disabled="!isLoggedIn"
					></v-checkbox>

					<v-row>
						<v-col>
							<v-btn
								class="mt-4"
								color="primary"
								:disabled="!valid"
								block
								@click="submit"
							>
								Υποβολή
							</v-btn>
						</v-col>
						<v-col>
							<v-btn
								class="mt-4"
								color="secondary"
								block
								@click="saveDraft"
							>
								Προσωρινή αποθήκευση
							</v-btn>
						</v-col>
					</v-row>
				</v-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: "ContactFormPage",

	data() {
		return {
			targetUser: null,
			email: null,
			name: null,
			surname: null,
			additionalInfo: null,

			adt: null,
			amka: null,
			afm: null,
			dateOfBirth: null,
			childAge: null,

			autoImport: false,
			valid: false,
			emailRules: [
				(v) => !!v || 'Email is required',
				(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			]
		}
	},

	computed: {
		user() {
			return this.$store.getters.loggedUser();
		},

		userExtended() {
			return this.$store.getters.loggedUser();
		},

		targetID() {
			return parseInt(this.$route.params.targetID);
		},

		isLoggedIn() {
			return this.$store.getters.isLoggedIn();
		}
	},

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				alert("Form submitted!");
			}
		},

		saveDraft() {
			this.$store.dispatch("saveDraft", {
				userID: this.user.id,
				draft: {
					email: this.email,
					name: this.name,
					surname: this.surname,
					additionalInfo: this.additionalInfo,
					targetUserID: this.targetUser.id
				}
			})
		},

		loadTargetUser() {
			const users = this.$store.getters.getUsers();
			this.targetUser = users.find(u => u.id === this.targetID);
		},

		async loadLoggedUserExtended() {
			await this.$store.dispatch("getUserExtended", this.user.id);
		}
	},

	mounted() {
		if (this.isLoggedIn) {
			this.autoImport = true;
		}

		this.loadTargetUser();
		this.loadLoggedUserExtended();
	},

	watch: {
		autoImport(checked) {
			if (checked) {
				this.email = this.user.email;
				this.name = this.user.name;
				this.surname = this.user.surname;

				this.adt = this.userExtended.adt;
				this.amka = this.userExtended.amka;
				this.afm = this.userExtended.afm;
			}
		}
	}
}
</script>

<style scoped>

</style>