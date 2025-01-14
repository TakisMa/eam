<template>
	<v-container class="d-flex flex-row align-center" style="height: 950px">
		<v-list>
			<v-list-item>
				<v-btn text="Πρόσκληση Κηδεμόνων"/>
			</v-list-item>

			<v-list-item>
				<v-btn variant="text" text="Πρόσκληση Επαγγελματιών" />
			</v-list-item>

			<v-list-item>
				<v-btn variant="text" text="Οδηγίες" />
			</v-list-item>

			<v-list-item>
				<v-btn variant="text" text="Συχνές Ερωτήσεις Κηδεμόνων" />
			</v-list-item>

			<v-list-item>
				<v-btn variant="text" text="Συχνές Ερωτήσεις Επαγγελματιών" />
			</v-list-item>
		</v-list>


	</v-container>
</template>

<script>
export default {
	name: "HelpPage"
}
</script>

<style scoped>

</style>