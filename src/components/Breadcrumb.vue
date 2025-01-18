<template>
	<v-container>
		<v-breadcrumbs :items="breadcrumbItems" divider="/">
			<template #item="{ item, href, disabled }">
				<v-breadcrumbs-item :to="href" :disabled="disabled">
					{{ item.text }}
				</v-breadcrumbs-item>
			</template>
		</v-breadcrumbs>
	</v-container>
</template>

<script>
export default {
	name: "Breadcrumb",

	computed: {
		breadcrumbItems() {
			return this.$route.matched.map((route) => {
				// Check if the route has parameters
				const href = route.name
							 ? this.$router.resolve({name: route.name, params: this.$route.params}).href
							 : null;

				return {
					text: route.meta.breadcrumb || route.name, // Fallback to route name if breadcrumb is not defined
					href: route.path === this.$route.path ? null : href, // Disable the current page link
					disabled: route.path === this.$route.path, // Mark the current page
				};
			});
		}
	}
}
</script>

<style scoped>

</style>