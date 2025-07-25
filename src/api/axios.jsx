import axios from "axios";

const BASE_URL = "https://isosoft-api.onrender.com";
//const BASE_URL = "http://localhost:3500";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosPrivate = axios.create({
  baseURL:  BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second 
  withCredentials: true, 
})

export default axiosPublic