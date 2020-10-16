import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/amazzon-clone1/us-central1/api", // The API  (cloud Function ) URL
});
export default instance;
