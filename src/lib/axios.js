import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASEURL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
  },
});
