<template>
	<v-container class="fill-height" fluid>
		<v-row justify="center" align="center">
			<v-col cols="12" sm="8" md="4">
				<v-card>
					<v-card-title class="text-h5 justify-center">
						Login
					</v-card-title>
					<v-card-text>
						<v-form ref="form" v-model="valid">
							<v-text-field
								v-model="email"
								placeholder="Email"
								:rules="emailRules"
								required
							></v-text-field>
							<v-text-field
								v-model="password"
								placeholder="Password"
								type="password"
								:rules="passwordRules"
								required
							></v-text-field>
							<v-checkbox v-model="keepLoggedIn"
								label="Να με θυμάσαι"/>
							<v-btn
								class="mt-4"
								color="primary"
								:disabled="!valid"
								block
								@click="submit"
							>
								Login
							</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'LoginPage',

	data() {
		return {
			email: '',
			password: '',
			keepLoggedIn: true,
			valid: false,
			emailRules: [
				(v) => !!v || 'Email is required',
				(v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			passwordRules: [
				(v) => !!v || 'Password is required',
				(v) => (v && v.length >= 3) || 'Password must be at least 3 characters long',
			],
		};
	},

	methods: {
		submit() {
			if (this.$refs.form.validate()) {
				this.$store.dispatch("userLogin", {
					email: this.email,
					password: this.password
				})
					.then(user => {
						this.$router.push({ name: "home" });
						if (this.keepLoggedIn) {
							localStorage.setItem("user", JSON.stringify(user));
						}
					});
			}
		},
	},
};
</script>

<style scoped>
.fill-height {
	height: 100vh;
}
</style>
