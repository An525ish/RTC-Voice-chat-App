import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const options = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH"
  },
  withCredentials: true,
};

const api = async (url, data) => {
  return await axios.post(BASE_URL + url, data, options);
};

export default api;

export const getApi = async (url) => {
  return await axios.get(BASE_URL + url, options);
};

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRqst = error.config;

    if (
      error.response.status === 401 &&
      originalRqst &&
      !originalRqst._isRetry 
    ) {
      originalRqst._isRetry = true;
      try {
        await axios.get(BASE_URL + '/api/refresh', options);
        return axios.request(originalRqst);
      } catch (error) {
        console.log(error.message);
      }
    }
    else throw error
  }, options
);
