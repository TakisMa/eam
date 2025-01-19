<template>
	<v-row height="100%">
		<v-col cols="4">
			<v-img src="@/assets/images/profile1.jpg" width="350" height="350"/>
		</v-col>

		<v-col cols="8">
			<v-expansion-panels static>

				<!--		Γενικη Περιγραφη		-->
				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Γενικη Περιγραφη
						</h3>
						<v-spacer/>
						<v-icon v-if="isMyProfile"
							:icon="generalInfoEditable ? 'mdi-check' : 'mdi-pencil'"
							@click.native.stop="handleEditClick(EditableFieldTypes.General)"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text v-if="!generalInfoEditable" class="px-2">
						{{ description }}
					</v-expansion-panel-text>

					<v-textarea v-else variant="outlined" v-model="editTempText"/>
				</v-expansion-panel>

				<!--		Περιορισμοί/ Προϋποθέσεις		-->
				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Περιορισμοί/ Προϋποθέσεις
						</h3>
						<v-spacer/>
						<v-icon v-if="isMyProfile"
							icon="mdi-pencil" @click.native.stop="handleEditClick(EditableFieldTypes.Condition)"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">

					</v-expansion-panel-text>
				</v-expansion-panel>

				<!--		Στοιχεία Επικοινωνίας		-->
				<v-expansion-panel v-if="isLoggedIn">
					<v-expansion-panel-title class="px-4">
						<h3>
							Στοιχεία Επικοινωνίας
						</h3>
						<v-spacer/>
						<v-icon v-if="isMyProfile"
							icon="mdi-pencil" @click.native.stop="handleEditClick(EditableFieldTypes.Contact)"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<!--		Προσωπικά Στοιχεία		-->
				<v-expansion-panel v-if="isLoggedIn">
					<v-expansion-panel-title class="px-4">
						<h3>
							Προσωπικά Στοιχεία
						</h3>
						<v-spacer/>
						<v-icon v-if="isMyProfile"
							:icon="personal.editable ? 'mdi-check' : 'mdi-pencil'"
							@click.native.stop="handleEditClick(EditableFieldTypes.Personal)"
						></v-icon>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
						<v-card>
							<v-form ref="form" v-model="personal.valid">
								<v-card-text>
									<v-row>
										<v-col>
											<v-text-field
												v-model="user.email"
												placeholder="E-mail"
												variant="outlined"
												label="E-mail"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
									</v-row>
									<v-row>
										<v-col>
											<v-text-field
												v-model="user.name"
												placeholder="Όνομα"
												variant="outlined"
												label="Όνομα"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
										<v-col>
											<v-text-field
												v-model="user.surname"
												placeholder="Επίθετο"
												variant="outlined"
												label="Επίθετο"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
									</v-row>
									<v-divider class="my-3" thickness="2"/>
									<v-row>
										<v-col>
											<v-text-field
												v-model="user.adt"
												placeholder="ΑΔΤ"
												variant="outlined"
												label="ΑΔΤ"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
										<v-col>
											<v-text-field
												v-model="user.amka"
												placeholder="ΑΜΚΑ"
												variant="outlined"
												label="ΑΜΚΑ"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
										<v-col>
											<v-text-field
												v-model="user.afm"
												placeholder="ΑΦΜ"
												variant="outlined"
												label="ΑΦΜ"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
									</v-row>
									<v-row>
										<v-col>
											<v-text-field
												v-model="user.phone"
												placeholder="Τηλέφωνο Επικοινωνίας"
												variant="outlined"
												label="Τηλέφωνο Επικοινωνίας"
												required
												:disabled="!this.personal.editable"
											></v-text-field>
										</v-col>
										<v-col>
											<v-menu v-model="personal.menu" :close-on-content-click="false">
												<template v-slot:activator="{ props }">
													<v-text-field
														v-bind="props"
														:model-value="user.date_of_birth?.format('DD / MM / YYYY')"
														placeholder="Ημερομηνίας Γέννησης"
														variant="outlined"
														label="Ημερομηνίας Γέννησης"
														append-inner-icon="mdi-calendar"
														hide-details
														:disabled="!this.personal.editable"
														readonly
													></v-text-field>
												</template>
												<v-date-picker
													v-model="user.date_of_birth"
													hide-header
													@update:model-value="personal.menu=false">
													>
												</v-date-picker>
											</v-menu>
										</v-col>
									</v-row>
									<v-row v-if="personal.editable" justify="end">
										<v-btn
											class="mt-4"
											text="Αποθήκευση"
											color="success"
											:disabled="!personal.valid"
											:loading="personal.loading"
											@click="savePersonalInfo"
										></v-btn>
										<v-btn
											class="mt-4"
											text="Ακύρωση"
											color="error"
											:loading="personal.loading"
											@click="cancelPersonalEdit"
										></v-btn>
									</v-row>
								</v-card-text>
							</v-form>
						</v-card>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<!--		Ενεργές Συνεργασίες/ Ραντεβού		-->
				<v-expansion-panel v-if="isMyProfile">
					<v-expansion-panel-title class="px-4">
						<h3>
							Ενεργές Συνεργασίες/ Ραντεβού
						</h3>
						<v-spacer/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="d-flex align-center px-2">
						<v-divider thickness="5"/>

						<div class="d-flex flex-row px-2">
							<p class="d-flex align-center">
								{{ contactFormStatusMessage }}
							</p>
							<v-spacer/>
							<v-btn v-if="!contactFormStatusButtonOptions?.hideButton"
								:color="contactFormStatusButtonOptions.color"
								:text="contactFormStatusButtonOptions.text"
								@click="contactFormStatusButtonOptions.action"
							/>
						</div>
					</v-expansion-panel-text>
				</v-expansion-panel>

				<!--		Ιστορικό		-->
				<v-expansion-panel v-if="isMyProfile" @click="handleExpansionPanelClick(EditableFieldTypes.Log)">
					<v-expansion-panel-title class="px-4">
						<h3>
							Ιστορικό
						</h3>
						<v-spacer/>
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick(EditableFieldTypes.Log)"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text v-for="prevUser in log.prevUsers" class="px-2">
						<v-card>
							<v-card-text>
								<v-row class="d-flex align-center">
									<v-col cols="1">
										<v-avatar image="https://randomuser.me/api/portraits/men/1.jpg"/>
									</v-col>
									<v-col cols="3">
										<div> {{ prevUser.name }}</div>
										<div> {{ prevUser.surname }}</div>
									</v-col>
									<v-col cols="4">
										<div> {{ prevUser.email }}</div>
									</v-col>
								</v-row>
							</v-card-text>
						</v-card>
					</v-expansion-panel-text>
				</v-expansion-panel>

			</v-expansion-panels>
		</v-col>
	</v-row>
</template>

<script>
import ContactFormStatusTypes from "@/enums/ContactFormStatusTypes.js";
import EditableFieldTypes from "@/enums/EditableFieldTypes.js";

import moment from "moment"

export default {
	name: "Profile",

	data() {
		return {
			// user: null,
			editTempText: null,
			generalInfoEditable: false,
			personal: {
				editable: false,
				menu: false,
				valid: false,
				tempForm: null,
				loading: false
			},
			log: {
				prevUsers: null,
				loading: false
			}
		}
	},

	computed: {
		EditableFieldTypes() {
			return EditableFieldTypes
		},

		users() {
			this.$store.getters.getUsers();
		},

		user() {
			return this.$store.getters.getUserProfile();
		},

		loggedUser() {
			return this.$store.getters.loggedUser();
		},

		isLoggedIn() {
			return this.$store.getters.isLoggedIn();
		},

		isMyProfile() {
			return this.isLoggedIn && this.user?.id === this.loggedUser?.id;
		},

		userID() {
			return parseInt(this.$route.params.id);
		},

		description() {
			return this.user?.additionalInfo?.description;
		},

		draft() {
			return this.$store.getters.getDraft();
		},

		document() {
			return this.$store.getters.getFinalizedContact();
		},

		contactFormStatus() {
			if (this.draft) {
				return ContactFormStatusTypes.Processing;
			}
			else if (this.document) {
				return ContactFormStatusTypes.Completed;
			}
			else {
				return ContactFormStatusTypes.Error;
			}
		},

		contactFormStatusMessage() {
			if (this.contactFormStatus === ContactFormStatusTypes.Processing) {
				return "Συνέχεια συμπλήρωσης φόρμας επικοινωνίας"
			}
			else if (this.contactFormStatus === ContactFormStatusTypes.Completed) {
				return "Προβολή αίτησης";
			}
		},

		contactFormStatusButtonOptions() {
			if (this.contactFormStatus === ContactFormStatusTypes.Processing) {
				return {
					text: "Συνέχεια",
					color: "#ef9f0f",
					action: this.continueContactFormFromDraft
				}
			}
			else if (this.contactFormStatus === ContactFormStatusTypes.Completed) {
				return {
					text: "Προβολή",
					color: "#3f8747",
					action: this.previewFinalizedContact
				}
			}
			else {
				return {
					hideButton: true
				}
			}
		}
	},

	methods: {
		loadUserProfile() {
			this.loadUser();
			this.loadUserExtended();
			this.loadDraft();
			this.loadFinalizedContact();
		},

		handleExpansionPanelClick(type) {
			if (type === EditableFieldTypes.Log) {
				if (!this.users) {
					this.log.loading = true;
					this.$store.dispatch("getUsers")
						.then(users => {
							this.log.prevUsers = users.filter(user => user.previousTransaction.includes(this.user.id))
							this.log.loading = false;
						});
				}
				else {
					this.log.prevUsers = this.users.filter(user => user.previousTransaction.include(this.user.id));
				}
			}
		},

		handleEditClick(type) {
			if (type === EditableFieldTypes.General) {
				this.editTempText = this.description;
				this.generalInfoEditable = !this.generalInfoEditable;
			}
			else if (type === EditableFieldTypes.Personal) {
				this.personal.editable = !this.personal.editable;
				if (this.personal.editable) {
					this.personal.tempForm = {...this.user};
				}
				else {
					this.savePersonalInfo();
					this.personal.tempForm = null;
				}
			}
			else if (type === EditableFieldTypes.Log) {
			}
		},

		loadUser() {
			if (!this.$store.getters.getUsers()) {
				this.$store.dispatch("getUserByID", this.userID)
					.then(user => {
						if (user) {
							this.$store.commit("setUserProfile", user);
						}
						else {
							alert("Something went wrong. User not found!. Please try again");
						}
					});
			}
			else {
				this.$store.commit("setUserProfile", this.$store.getters.getUserByID(this.userID));
			}
		},

		loadUserExtended() {
			this.$store.dispatch("getUserExtended", this.userID)
				.then(user => {
					user.date_of_birth = moment(user.date_of_birth);
					this.$store.commit("setUserProfile", user);
				});
		},

		loadDraft() {
			if (!this.$store.getters.getDraft()) {
				this.$store.dispatch("getDraft", this.userID);
			}
		},

		loadFinalizedContact() {
			if (!this.$store.getters.getDraft()) {
				this.$store.dispatch("getFinalizedContact", this.userID);
			}
		},

		continueContactFormFromDraft() {
			this.$router.push({
				name: "contactForm",
				params: {
					targetID: this.draft?.targetUserID,
					continueFromDraft: true
				}
			})
		},

		previewFinalizedContact() {
			this.$router.push({name: "preview"});
		},

		savePersonalInfo() {
			this.personal.loading = true;
			const userInfo = {
				id: this.user.id,
				email: this.user.email,
				name: this.user.name,
				surname: this.user.surname,
				location_id: this.user.location_id
			};

			const userInfoExtended = {
				id: this.user.id,
				adt: this.user.adt,
				amka: this.user.amka,
				afm: this.user.afm,
				phone: this.user.phone,
				date_of_birth: this.user.date_of_birth.format()
			}

			const userPromise = new Promise((resolve, reject) => {
				this.$store.dispatch("updateUserInfo", userInfo)
					.then(() => resolve());
			});
			const userExtendedPromise = new Promise((resolve, reject) => {
				this.$store.dispatch("updateUserExtendedInfo", userInfoExtended)
					.then(() => resolve());
			});

			Promise.all([userPromise, userExtendedPromise])
				   .then(() => {
					   this.$store.commit("setAlert", {
						   open: true,
						   type: "success",
						   text: "Επιτυχής ενημέρωση στοιχείων"
					   });
					   this.personal.editable = false;
					   this.personal.loading = false
				   });
		},

		cancelPersonalEdit() {
			this.$store.commit("setUserProfile", this.personal.tempForm);
			// this.user = {...this.personal.tempForm};
			this.personal.editable = false;
		}
	},

	mounted() {
		this.loadUserProfile();
	},

	watch: {
		contactFormStatus(val) {
			if (val === ContactFormStatusTypes.Error) {
				this.$store.commit("setAlert", {
					open: true,
					type: "error",
					text: "Πρόβλημα κατά την φόρτωση των ενεργών συνεργασιών και ραντεβού./\nΠαρακαλώ ανανεώστε τη σελίδα και αν το πρόβλημα εξακολουθήσει, αποσυνδεθείτε και συνδεθείτε εκ νέου"
				})
			}
		},

		watch: {
			'$route.params.id'() {
				this.loadUserProfile();
			},
		},
	}
}
</script>

<style scoped>

</style>