import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.125.127.14:8080/",
  timeout: 3000,
});

export default axiosInstance;
