import axios from "axios";

axios.defaults.baseURL = "https://cpm-back-end.herokuapp.com/api";

axios.interceptors.request.use((config) =>{
  const accessToken = window.localStorage.getItem("accessToken") || "";
  config.headers = {
    "Content-Type": "application/json",
    'cpm-user-app-token': accessToken
  }
  return config;
})

const request = {
  get: (url: string) => {
    return axios.get(url);
  },
  post: (url: string, body: string) => {
    return axios.post(url, body);
  },
  put: (url: string, body: string) => {
    return axios.put(url, body);
  },
  patch: (url: string, body: string) => {
    return axios.patch(url, body);
  },
  delete: (url: string) => {
    return axios.delete(url);
  },
};

export default request;
