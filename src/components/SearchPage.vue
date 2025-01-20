<template>
	<SearchBar @search-users="searchUsers"/>
	<v-card v-if="users && !loading" class="my-10" flat>
		<v-card-title>
			<h1>
				Αποτελεσματα Αναζητησης
			</h1>
		</v-card-title>
		<v-divider/>

		<v-virtual-scroll v-if="filteredUsers.length > 2" :items="filteredUsers" height="1000">
			<template v-slot:default="{ item: user }">
				<v-card-item v-if="user" class="pa-4">
					<v-row align="center">
						<v-col cols="1">
							<v-btn class="d-flex align-center"
								variant="text" :ripple="false" size="120" rounded="xl"
								@click="handleProfileClick(user.id)"
							>
								<v-avatar image="@/assets/images/profile1.jpg" size="100"/>
							</v-btn>
						</v-col>

						<v-col cols="5">
							<v-list>
								<v-list-item>
									<b>Όνομα:</b> {{ user.name }}
								</v-list-item>
								<v-list-item>
									<b> Επίθετο: </b> {{ user.surname }}
								</v-list-item>
								<v-list-item>
									<b> Περιοχή: </b> {{ user.location }}
								</v-list-item>
								<v-list-item>
									<b> Ωράριο απασχόλησης: </b> {{ user.workingTime }}
								</v-list-item>
								<v-list-item>
									<b> Επίπεδο εκπαίδευσης: </b> {{ user.education }}
								</v-list-item>
								<v-list-item v-if="user.additionalInfo">
									<b> Λίγα λόγια: </b> {{ user.additionalInfo.description }}
								</v-list-item>
							</v-list>
						</v-col>

						<v-col cols="3">
							<Calendar
								:available-dates-array="user.availability"
								:search-button-enabled="false"
							/>
						</v-col>

						<v-col cols="3" class="d-flex flex-column ">
							<v-btn class="my-4"
								text="Κλειστε Ηλεκτρονικο Ραντεβου"
								append-icon="mdi-arrow-right-circle-outline"
								color="primary"
								width="65%"
								@click="contactProf(user.id)"
							/>
							<v-btn class="my-4"
								text="Κλειστε Δια Ζωσης Ραντεβου"
								append-icon="mdi-arrow-right-circle-outline"
								color="secondary"
								width="65%"
							/>
							<v-btn v-if="user.previousTransaction" class="my-4"
								text="Γρηγορη Υποβολη"
								append-icon="mdi-arrow-right-circle-outline"
								width="65%"
							/>
						</v-col>
					</v-row>
					<v-divider thickness="10"/>
				</v-card-item>
			</template>
		</v-virtual-scroll>
		<v-card-item v-else-if="filteredUsers.length" v-for="user in filteredUsers" class="pa-4">
			<v-row align="center">
				<v-col cols="1">
					<v-btn class="d-flex align-center"
						variant="text" :ripple="false" size="120" rounded="xl"
						@click="handleProfileClick(user.id)"
					>
						<v-avatar image="@/assets/images/profile1.jpg" size="100"/>
					</v-btn>
				</v-col>

				<v-col cols="5">
					<v-list>
						<v-list-item>
							{{ user.name }}
						</v-list-item>
						<v-list-item>
							{{ user.surname }}
						</v-list-item>
						<v-list-item>
							{{ user.location }}
						</v-list-item>
						<v-list-item>
							{{ user.workingTime }}
						</v-list-item>
						<v-list-item>
							{{ user.education }}
						</v-list-item>
						<v-list-item v-if="user.additionalInfo">
							{{ user.additionalInfo.description }}
						</v-list-item>
					</v-list>
				</v-col>

				<v-col cols="3">
					<Calendar
						:available-dates-array="user.availability"
						:search-button-enabled="false"
					/>
				</v-col>

				<v-col cols="3" class="d-flex flex-column ">
					<v-btn class="my-4"
						text="Κλειστε Ηλεκτρονικο Ραντεβου"
						append-icon="mdi-arrow-right-circle-outline"
						color="#FFA000FF"
						width="65%"
					/>
					<v-btn class="my-4"
						text="Κλειστε Δια Ζωσης Ραντεβου"
						append-icon="mdi-arrow-right-circle-outline"
						color="#FAEFC0FF"
						width="65%"
					/>
					<v-btn v-if="user.previousTransaction" class="my-4"
						text="Γρηγορη Υποβολη"
						append-icon="mdi-arrow-right-circle-outline"
						width="65%"
					/>
				</v-col>
			</v-row>
			<v-divider thickness="10"/>
		</v-card-item>
		<p v-else class="pa-4">
			No users matching your search
		</p>
	</v-card>
	<v-skeleton-loader v-if="loading" type="card"></v-skeleton-loader>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Calendar from "@/components/Calendar.vue";

export default {
	name: "SearchPage",
	components: {Calendar, SearchBar},

	data() {
		return {
			loading: false
		}
	},

	computed: {
		users() {
			return this.$store.getters.getUsers();
		},

		filteredUsers() {
			return this.$store.getters.getFilteredUsers();
		}
	},

	methods: {
		handleProfileClick(id) {
			this.$router.push({
				name: "profile",
				params: {id}
			});
		},

		searchUsers(filters) {
			if (filters.locations?.length || filters.childAge || filters.workingTime || filters.education) {
				const users = this.users.filter(user => {
					return filters.locations?.includes(user.location_id) ||
						   filters.childAge === user.childAge ||
						   filters.workingTime === user.workingTime ||
						   filters.education === user.education
				});

				this.$store.commit("setFilteredUsers", users);
			}
			else {
				this.$store.dispatch("resetFilteredUsers");
			}
		},

		contactProf(targetID) {
			this.$router.push({
				name: "contactForm",
				params: {
					targetID,
					continueFromDraft: false
				}
			})
		}
	},

	mounted() {
		this.loading = true;

		if (!this.users) {
			this.$store.dispatch("getUsers")
				.then(() => this.loading = false);
		}
		else {
			this.loading = false;
		}
	}
}
</script>

<style scoped>

</style>