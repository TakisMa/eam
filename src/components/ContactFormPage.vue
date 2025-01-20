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
								variant="outlined"
								label="E-mail"
								:rules="emailRules"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
						<v-divider vertical thickness="2"/>
						<v-col>
							<v-text-field
								:model-value="targetUser?.email"
								variant="outlined"
								label="E-mail"
								disabled
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-text-field
								v-model="name"
								placeholder="Όνομα"
								variant="outlined"
								label="Όνομα"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
						<v-divider vertical thickness="2"/>
						<v-col>
							<v-text-field
								:model-value="targetUser?.name"
								variant="outlined"
								label="Όνομα"
								disabled
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-text-field
								v-model="surname"
								placeholder="Επίθετο"
								variant="outlined"
								label="Επίθετο"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
						<v-divider vertical thickness="2"/>
						<v-col>
							<v-text-field
								:model-value="targetUser?.surname"
								variant="outlined"
								label="Επίθετο"
								disabled
							></v-text-field>
						</v-col>
					</v-row>
					<v-divider class="my-3" thickness="2"/>
					<v-row>
						<v-col>
							<v-text-field
								v-model="adt"
								placeholder="ΑΔΤ"
								variant="outlined"
								label="ΑΔΤ"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
						<v-col>
							<v-text-field
								v-model="amka"
								placeholder="ΑΜΚΑ"
								variant="outlined"
								label="ΑΜΚΑ"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
						<v-col>
							<v-text-field
								v-model="afm"
								placeholder="ΑΦΜ"
								variant="outlined"
								label="ΑΦΜ"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<v-text-field
								v-model="phone"
								placeholder="Τηλέφωνο Επικοινωνίας"
								variant="outlined"
								label="Τηλέφωνο Επικοινωνίας"
								required
								@input="autoImport=false"
							></v-text-field>
						</v-col>
						<v-col>
							<v-menu v-model="menu" :close-on-content-click="false">
								<template v-slot:activator="{ props }">
									<v-text-field
										v-bind="props"
										:model-value="dateOfBirth?.format('DD / MM / YYYY')"
										placeholder="Ημερομηνίας Γέννησης"
										variant="outlined"
										label="Ημερομηνίας Γέννησης"
										append-inner-icon="mdi-calendar"
										hide-details
										readonly
									></v-text-field>
								</template>
								<v-date-picker
									v-model="dateOfBirth"
									hide-header
									@update:model-value="handleInput">
									>
								</v-date-picker>
							</v-menu>
						</v-col>
					</v-row>

					<v-textarea
						v-model="additionalInfo"
						variant="outlined"
						placeholder="Επιπλέον πληροφορίες"
						label="Επιπλέον πληροφορίες"
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
		<v-skeleton-loader v-if="loading" type="card"/>
	</v-container>
</template>

<script>
import moment from "moment";

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
			phone: null,

			autoImport: false,
			menu: false,
			valid: false,
			emailRules: [
				(v) => !!v || 'Email is required',
				(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			loading: false
		}
	},

	computed: {
		user() {
			return this.$store.getters.loggedUser();
		},

		userExtended() {
			return this.$store.getters.loggedUserExtended();
		},

		targetID() {
			return parseInt(this.$route.params.targetID);
		},

		continueFromDraft() {
			return this.$route.params.continueFromDraft;
		},

		isLoggedIn() {
			return this.$store.getters.isLoggedIn();
		},

		draft() {
			return this.$store.getters.getDraft();
		}
	},

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				this.$store.dispatch("saveFinal", {
						userID: this.user.id,
						document: {
							targetUserID: this.targetUser.id,
							email: this.email,
							name: this.name,
							surname: this.surname,
							additionalInfo: this.additionalInfo,
							adt: this.adt,
							amka: this.amka,
							afm: this.afm,
							dateOfBirth: this.date_of_birth,
							phone: this.phone
						}
					})
					.then(res => {
						if (res.status === 200) {
							this.$store.commit("setAlert", {
								open: true,
								type: "success",
								text: "Επιτυχής υποβολή αίτησης!"
							});
							this.$store.dispatch("clearDraft", {userID: this.user.id})
								.then(res => {
									if (res.status !== 200) {
										this.$store.commit("setAlert", {
											open: true,
											type: "error",
											text: "Προέκυψε κάποιο πρόβλημα κατά την υποβολή της αίτησης!"
										});
									}
									else {
										this.$router.push({
											name: "profile",
											params: {id: this.$store.getters.loggedUserID()}
										});
									}
								});
						}
						else {
							this.$store.commit("setAlert", {
								open: true,
								type: "error",
								text: "Προέκυψε κάποιο πρόβλημα κατά την υποβολή της αίτησης!"
							});
						}
					});
			}
		},

		saveDraft() {
			this.$store.dispatch("saveDraft", {
				userID: this.user.id,
				draft: {
					targetUserID: this.targetUser.id,
					email: this.email,
					name: this.name,
					surname: this.surname,
					additionalInfo: this.additionalInfo,
					adt: this.adt,
					amka: this.amka,
					afm: this.afm,
					dateOfBirth: this.date_of_birth,
					phone: this.phone
				}
			});
		},

		loadTargetUser() {
			const users = this.$store.getters.getUsers();
			this.targetUser = users.find(u => u.id === this.targetID);
		},

		loadLoggedUserExtended() {
			return this.$store.dispatch("getUserExtended", this.user?.id)
				.then(user => this.$store.commit("setLoggedUserExtended", user))
		},

		loadFromDraft() {
			this.email = this.draft?.email;
			this.name = this.draft?.name;
			this.surname = this.draft?.surname;

			this.adt = this.draft?.adt;
			this.amka = this.draft?.amka;
			this.afm = this.draft?.afm;
			this.dateOfBirth = moment(this.draft?.date_of_birth);
			this.phone = this.draft?.phone;

			this.autoImport = true;
		},

		handleInput() {
			this.menu = false;
			this.autoImport = false;
		}
	},

	mounted() {
		if (this.continueFromDraft) {
			this.loadFromDraft();
		}
		else if (this.isLoggedIn) {
			this.autoImport = true;
		}
		this.loadTargetUser();
		this.loadLoggedUserExtended()
			.then(() => this.loading = false);
	},

	watch: {
		autoImport(checked) {
			if (checked) {
				this.email = this.user?.email;
				this.name = this.user?.name;
				this.surname = this.user?.surname;

				this.adt = this.userExtended?.adt;
				this.amka = this.userExtended?.amka;
				this.afm = this.userExtended?.afm;
				this.dateOfBirth = moment(this.userExtended?.date_of_birth);
				this.phone = this.userExtended?.phone;
			}
		},

		user(val, prev) {
			if (val && !prev) {
				this.email = this.user.email;
				this.name = this.user.name;
				this.surname = this.user.surname;
			}
		},

		userExtended(curr, prev) {
			if (curr && !prev) {
				this.adt = this.userExtended.adt;
				this.amka = this.userExtended.amka;
				this.afm = this.userExtended.afm;
				this.dateOfBirth = moment(this.userExtended.date_of_birth);
				this.phone = this.userExtended.phone;
			}
		}
	}
}
</script>

<style scoped>

</style>