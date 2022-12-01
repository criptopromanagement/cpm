import axios from "axios";

axios.defaults.baseURL = "https://cpm-api.onrender.com/api";

axios.interceptors.request.use((config) => {
  const accessToken =
    config.params !== undefined
      ? config.params?.token
      : window.localStorage.getItem("accessToken") || "";
  config.headers = {
    "Content-Type": "application/json",
    "cpm_user_app_token": accessToken,
  };

  return config;
});

const request = {
  get: (url: string) => {
    return axios.get(url);
  },
  post: (url: string, body: string) => {
    return axios.post(url, body);
  },
  postWithToken: (url: string, body: string, token: string) => {
    return axios.post(url, body, { params: { token } });
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