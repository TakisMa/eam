import axios from "axios";

export default {
	getLocations() {
		return axios.get("http://localhost:3000/locations");
	}
}