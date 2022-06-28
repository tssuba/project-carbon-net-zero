import axios from "axios";

const FALLBACK_BACKEND_URL = "http://api.localhost";
const BASEURL = process.env.REACT_APP_BACKEND_URL || FALLBACK_BACKEND_URL;

const REQUEST_TIMEOUT = 1500;

// Singleton Axios Instance
const axiosInstance = axios.create({
    baseURL: BASEURL,
    timeout: REQUEST_TIMEOUT,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export default axiosInstance;
