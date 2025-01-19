<template>
	<v-row height="100%">
		<v-col cols="4">
			<v-img src="@/assets/images/profile1.jpg" width="350" height="350"/>
		</v-col>

		<v-col cols="8">
			<v-expansion-panels static>

				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Γενικη Περιγραφη
						</h3>
						<v-spacer/>
						<v-icon id="generalInfo"
							:icon="generalInfoEditable ? 'mdi-check' : 'mdi-pencil'"
							@click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text v-if="!generalInfoEditable" class="px-2">
						{{ description }}
					</v-expansion-panel-text>

					<v-text-field v-else v-model="editTempText"/>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Περιορισμοί/ Προϋποθέσεις
						</h3>
						<v-spacer/>
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">

					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Στοιχεία Επικοινωνίας
						</h3>
						<v-spacer/>
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Προσωρπικά Στοιχεία
						</h3>
						<v-spacer/>
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
					</v-expansion-panel-text>
				</v-expansion-panel>

				<v-expansion-panel>
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

				<v-expansion-panel>
					<v-expansion-panel-title class="px-4">
						<h3>
							Ιστορικό
						</h3>
						<v-spacer/>
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
					</v-expansion-panel-text>
				</v-expansion-panel>

			</v-expansion-panels>
		</v-col>
	</v-row>
</template>

<script>
import ContactFormStatusTypes from "@/enums/ContactFormStatusTypes.js";

export default {
	name: "Profile",

	data() {
		return {
			user: null,
			editTempText: null,
			generalInfoEditable: false,
		}
	},

	computed: {
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
		handleEditClick(ev) {
			this.editTempText = this.description;
			this.generalInfoEditable = !this.generalInfoEditable;
		},

		loadUser() {
			if (!this.$store.getters.getUsers()) {
				this.$store.dispatch("getUserByID", this.userID)
						  .then(user => {
							  if (user) {
								  this.user = user;
							  }
							  else {
								  alert("Something went wrong. User not found!. Please try again");
							  }
						  });
			}
			else {
				this.user = this.$store.getters.getUserByID(this.userID);
			}
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
			this.$router.push({ name: "preview" });
		}
	},

	mounted() {
		this.loadUser();
		this.loadDraft();
		this.loadFinalizedContact();
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
		}
	}
}
</script>

<style scoped>

</style>