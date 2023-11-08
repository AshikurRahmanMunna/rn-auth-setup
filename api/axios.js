import axios from "axios";
import keys from "../config/keys";

const axiosInstance = axios.create({
  baseURL: keys.base_url,
  params: {
    key: keys.firebase_api_key,
  },
});

export default axiosInstance;
