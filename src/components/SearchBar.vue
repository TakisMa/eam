<template>
	<v-container class="search-bar-container">
		<v-row>
			<v-col>
				<v-select v-model="location"
					:items="locationItems"
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
					width="60%" color="#3E2828FF"/>
			</v-col>

		</v-row>
	</v-container>
</template>

<script>
export default {
	name: "SearchBar",

	data() {
		return {
			location: null,
			locationItems: [
				"Αγίας Παρασκευής",
				"Αγίου Δημητρίου",
				"Αθηναίων",
				"Αιγάλεω",
				"Αλίμου",
				"Αμαρουσίου",
				"Αχαρνών",
				"Βάρης-Βούλας-Βουλιαγμένης",
				"Βύρωνα",
				"Γαλατσίου",
				"Γλυφάδας",
				"Δάφνης-Υμηττού",
				"Διονύσου",
				"Ελευσίνας",
				"Ελληνικού-Αργυρούπολης",
				"Ζωγράφου",
				"Ηλιούπολης",
				"Θηβαίων",
				"Ιλίου",
				"Καλλιθέας",
				"Καισαριανής",
				"Κηφισιάς",
				"Κορυδαλλού",
				"Κρωπίας",
				"Λαυρεωτικής",
				"Λυκόβρυσης-Πεύκης",
				"Μαραθώνος",
				"Μαρκοπούλου Μεσογαίας",
				"Μεγαρέων",
				"Μεταμόρφωσης",
				"Μοσχάτου-Ταύρου",
				"Νέας Ιωνίας",
				"Νέας Σμύρνης",
				"Νέας Φιλαδέλφειας-Νέας Χαλκηδόνας",
				"Νίκαιας-Αγίου Ιωάννη Ρέντη",
				"Παπάγου-Χολαργού",
				"Παιανίας",
				"Παλαιού Φαλήρου",
				"Περιστερίου",
				"Πετρούπολης",
				"Πειραιά",
				"Ραφήνας-Πικερμίου",
				"Σαρωνικού",
				"Σπάτων-Αρτέμιδος",
				"Φιλοθέης-Ψυχικού",
				"Φυλής",
				"Χαϊδαρίου",
				"Χαλανδρίου"
			],
			childAge:
				null,
			previousExperience:
				null,
			education:
				null,

		}
	}
}
</script>

<style scoped>
.search-bar-container {
	background: #dfb833;
}

</style>