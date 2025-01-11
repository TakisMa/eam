<template>
	<v-app-bar order="0" height="150" elevation="2" class="">
		<template v-slot:prepend>
			<v-img class="logo" width="285" height="150" src="@/assets/images/gov-gr-logo.png" eager/>
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
	name: "Header"
}
</script>

<style scoped>
</style>