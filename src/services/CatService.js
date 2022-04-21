import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/search",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRandomCat() {
    return apiClient.get("/");
  },
};
