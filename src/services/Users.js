import users from "@/dummyData/Users.json"

export default {
	getUsers() {
		return Object.keys(users).map(key => users[key]);
	}
}