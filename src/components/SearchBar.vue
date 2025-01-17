<template>
	<v-container class="search-bar-container">
		<v-row>
			<v-col>
				<v-select v-model="locations"
					:items="locationItems"
					item-title="title"
					item-value="id"
					placeholder="Επιλεξτε Δημο"
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
					multiple
				/>
			</v-col>

			<v-col>
				<v-select v-model="childAge"
					:items="[1, 2, 3, 4, 5]"
					placeholder="Επιλεξτε Ηλικια"
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
				/>
			</v-col>

			<v-col>
				<v-select v-model="previousExperience"
					:items="[1, 2, 3, 4, 5]"
					placeholder="Επιλεξτε Προϋπηρεσία"
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
				/>
			</v-col>

			<v-col>
				<v-select v-model="education"
					:items="['Δευτεροβαθμεια', 'Τριτοβαθμια']"
					placeholder="Επιλεξτε Εκπαιδευση"
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
				/>
			</v-col>

			<v-col class="d-flex justify-center">
				<v-btn text="Αναζητηση"
					append-icon="mdi-magnify"
					width="60%" color="#3E2828FF"
					@click="searchUsers"
				/>
			</v-col>

		</v-row>
	</v-container>
</template>

<script>

export default {
	name: "SearchBar",

	emits: ["searchUsers"],

	data() {
		return {
			locations: null,
			locationItems: [],
			childAge: null,
			previousExperience: null,
			education: null,
		}
	},

	methods: {
		async loadLocations() {
			await this.$store.dispatch("getLocations")
				.then(res => this.locationItems = res);
		},

		searchUsers() {
			this.$emit("searchUsers", {
				locations: this.locations,
				childAge: this.childAge,
				workingTime: this.previousExperience,
				education: this.education
			});
		}
	},

	created() {
		this.loadLocations();
	}
}
</script>

<style scoped>
.search-bar-container {
	background: #dfb833;
}

</style>