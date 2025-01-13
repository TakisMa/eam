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
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
						{{ user.description }}
					</v-expansion-panel-text>
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
						<v-icon icon="mdi-pencil" @click.native.stop="handleEditClick"/>
					</v-expansion-panel-title>

					<v-expansion-panel-text class="px-2">
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
export default {
	name: "Profile",

	data() {
		return {
			params: null
		}
	},

	computed: {
		userID() {
			return this.$route.params.id;
		},

		user() {
			return this.$store.getters.getUserByID(this.userID);
		}
	},

	methods: {
		handleEditClick() {
		}
	}

	// created() {
	// 	this.$watch(
	// 		() => this.$route.params.id,
	// 		(newId, oldId) => {
	// 			// react to route changes...
	// 		}
	// 	)
	// },
}
</script>

<style scoped>

</style>