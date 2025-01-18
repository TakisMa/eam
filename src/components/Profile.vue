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
								Συνέχεια συμπλήρωσης φόρμας επικοινωνίας
							</p>
							<v-spacer/>
							<v-btn
								color="primary"
								text="Συμπλήρωση"
								@click="continueContactFormFromDraft"
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
const messages = [
	"Συνέχεια συμπλήρωσης φόρμας επικοινωνίας",
	"Προβολή αίτησης",
	"Ακύρωση αίτησης"
]

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
			return this.$store.getters.get
		}
	},

	methods: {
		handleEditClick(ev) {
			this.editTempText = this.description;
			this.generalInfoEditable = !this.generalInfoEditable;
		},

		async loadUser() {
			if (!this.$store.getters.getUsers()) {
				await this.$store.dispatch("getUserByID", this.userID)
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

		continueContactFormFromDraft() {
			this.$router.push({
				name: "contactForm",
				params: {
					targetID: this.draft?.targetUserID,
					continueFromDraft: true
				}
			})
		}
	},

	mounted() {
		this.loadUser();
		this.loadDraft();
	}
}
</script>

<style scoped>

</style>