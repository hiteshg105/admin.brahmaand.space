import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.233.99.196:9000",
});
// baseURL: "http://13.233.99.196:9000admin",
// baseURL: "http://65.0.183.149:8000admin",
// baseURL: "http://13.233.99.196:9000",
export default instance;
