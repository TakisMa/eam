<template>
	<v-container>
		<v-main>
			<Breadcrumb />
			<RouterView />
		</v-main>
	</v-container>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import HomePage from "@/components/HomePage.vue";

export default {
	name: "Main",
	components: {HomePage, Breadcrumb}
}
</script>

<style scoped>

</style>