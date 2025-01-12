<template>
	<div class="d-flex justify-center align-center flex-wrap" >
		<v-row class="d-flex justify-center">
			<v-btn
				:append-icon="centralButtonOptions.icon"
				:text="centralButtonOptions.title"
				:color="centralButtonOptions.color"
				width="464" height="165"
			/>
		</v-row>
		<v-row>
			<v-col class="d-flex justify-space-evenly">
				<v-btn
					:append-icon="lowerLeftButtonOptions.icon"
					:text="lowerLeftButtonOptions.title"
					:color="lowerLeftButtonOptions.color"
				/>
			</v-col>
			<v-col class="d-flex justify-space-evenly">
				<v-btn
					:append-icon="lowerRightButtonOptions.icon"
					:text="lowerRightButtonOptions.title"
					:color="lowerRightButtonOptions.color"
				/>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	name: "ButtonGroup",

	props: ["centralButtonOptions", "lowerLeftButtonOptions", "lowerRightButtonOptions"]
}
</script>

<style scoped>

</style>