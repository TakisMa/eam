<template>
	<SearchBar/>
	<v-card class="my-10"
		flat
	>
		<v-card-title>
			<h1>
				Αποτελεσματα Αναζητησης
			</h1>
		</v-card-title>
		<v-divider />

		<v-card-item class="pa-4" v-for="user in users">
			<v-row align="center">
				<v-col cols="1">
					<v-btn class="d-flex align-center"
						variant="text" :ripple="false" size="120" rounded="xl">
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
							{{ user.additionalInfo }}
						</v-list-item>
					</v-list>
				</v-col>

				<v-col cols="3">
					<Calendar :search-button-enabled="false"/>
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
	</v-card>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import Calendar from "@/components/Calendar.vue";

export default {
	name: "SearchPage",
	components: {Calendar, SearchBar},

	data() {
		return {
			users: {
				user1: {
					name: "Maria",
					surname: "Papastaurou",
					location: "Peristeri",
					workingTime: "Full time",
					education: "AEI",
					additionalInfo: null,
					previousTransaction: false
				},
				user2: {
					name: "Maria",
					surname: "Papastaurou",
					location: "Peristeri",
					workingTime: "Full time",
					education: "AEI",
					additionalInfo: null,
					previousTransaction: false
				},
			}
		}
	},

	methods: {
		handleProfileClick() {
			this.$router.push("/profile");
		}
	}
}
</script>

<style scoped>

</style>