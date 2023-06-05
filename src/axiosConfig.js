import axios from "axios";

const instance = axios.create({
  // baseURL: "https://backend.brahmaand.space",
  baseURL: "http://localhosst:9000",
});
// baseURL: "https://backend.brahmaand.spaceadmin",
// baseURL: "http://65.0.183.149:8000admin",
// baseURL: "https://backend.brahmaand.space",
export default instance;
