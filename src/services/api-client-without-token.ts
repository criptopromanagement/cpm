import axios from "axios";

axios.defaults.baseURL = "https://cpm-tst.onrender.com/api"

const apiClientWithoutToken = {
    post: (url: string, body: string) => {
        return axios.post(url, body)
    },
    get: (url: string) => {
        return axios.get(url)
    }
};


export default apiClientWithoutToken;
