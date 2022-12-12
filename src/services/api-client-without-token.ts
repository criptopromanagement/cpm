import axios from "axios";

axios.defaults.baseURL = "https://cpm-api.onrender.com/api"

const apiClientWithoutToken = {
    post: (url: string, body: string) => {
        return axios.post(url, body)
    }
};


export default apiClientWithoutToken;
