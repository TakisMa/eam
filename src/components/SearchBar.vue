<template>
	<v-container class="search-bar-container">
		<v-row>
			<v-col>
				<v-select v-model="locations"
					:items="locationItems"
					item-title="title"
					item-value="id"
					placeholder="Επιλεξτε Δημο"
					clearable
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
					multiple
				/>
			</v-col>

			<v-col>
				<v-select v-model="childAge"
					:items="childAgeItems"
					placeholder="Επιλεξτε Ηλικια (μηνες)"
					clearable
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
				/>
			</v-col>

			<v-col>
				<v-select v-model="previousExperience"
					:items="previousExperienceItems"
					placeholder="Επιλεξτε Προϋπηρεσία"
					clearable
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
					clearable
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
				/>
			</v-col>

			<v-col>
				<v-select v-model="workingTime"
					:items="workingTimeItems"
					placeholder="Επιλεξτε ωραριο απασχολησης"
					clearable
					variant="outlined"
					density="compact"
					bg-color="white"
					hide-details
				/>
			</v-col>

			<v-col class="d-flex flex-row ">
				<v-btn text="Αναζητηση"
					append-icon="mdi-magnify"
					width="60%" color="#3E2828FF"
					@click="searchUsers"
				/>

				<v-btn class="d-flex flex-wrap" text="Καθαρισμος φιλτρων"
					append-icon="mdi-close-circle-outline"
					width="40%" color="#C95353FF"
					@click="resetFilteredUsers"
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
			childAgeItems: Array.from({length: 29}, (_, index) => index + 2),
			previousExperience: null,
			previousExperienceItems: [
				{
					title: 'Ναι',
					value: true
				},
				{
					title: 'Οχι',
					value: false
				}
			],
			education: null,
			workingTime:null,
			workingTimeItems: [
				{
					title: 'Πληρης απασχοληση',
					value: 'Full time'
				},
				{
					title: 'Μερικη απασχοληση',
					value: 'Part time'
				}
			]
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
				previousExperience: this.previousExperience,
				workingTime: this.workingTime,
				education: this.education
			});
		},

		resetFilteredUsers() {
			this.locations = null;
			this.childAge = null;
			this.previousExperience = null;
			this.education = null;
			this.workingTime = null;

			this.$store.dispatch("resetFilteredUsers");
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