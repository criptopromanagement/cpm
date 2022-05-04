import axios from "axios";

axios.defaults.baseURL = "https://cpm-back-end.herokuapp.com/api";

axios.interceptors.request.use((config) =>{
  const token = window.localStorage.getItem("token") || "";
  config.headers = {
    "Content-Type": "application/json",
    'cpm-user-app-token': token
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
  delete: (url: string) => {
    return axios.delete(url);
  },
};

export default request;
