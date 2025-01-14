import users from "@/dummyData/Users.json"
import axios from "axios";

export default {
	getUsers() {
		return axios.get("http://localhost:3000/search");
	}
}