<template>
	<v-app-bar order="0" height="150" elevation="2">
		<template v-slot:prepend>
			<v-btn class="d-flex align-center" :ripple="false" @click="toHome">
				<v-img class="logo" width="285" height="150" src="@/assets/images/gov-gr-logo.png" eager/>
			</v-btn>
		</template>
		<v-spacer/>
		<v-btn color="secondary">
			Ανακοινώσεις
		</v-btn>
		<v-btn color="secondary">
			Βοήθεια
		</v-btn>
		<v-btn color="secondary">
			Προφίλ
		</v-btn>
		<v-btn color="secondary">
			Είσοδος
		</v-btn>
	</v-app-bar>

</template>

<script>
export default {
	name: "Header",

	methods: {
		toHome() {
			this.$router.push("/");
		}
	}
}
</script>

<style scoped>
</style>