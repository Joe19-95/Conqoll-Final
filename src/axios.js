import axios from "axios";
const instance = axios.create({
  baseURL: "https://restcountries.eu/rest",
});
export default instance;
