import axios from "axios";

axios.defaults.baseURL = "https://cpm-api-vejr.onrender.com/api";

axios.interceptors.request.use((config) => {
  const accessToken = config.headers?.cpm_user_app_token ?? window.localStorage.getItem("accessToken") ?? "";
  config.headers = {
    "Content-Type": "application/json",
    cpm_user_app_token: accessToken ?? "",
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
    return axios.post(url, body, { headers: { cpm_user_app_token: token } });
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
