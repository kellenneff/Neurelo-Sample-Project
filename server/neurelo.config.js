const axios = require('axios');
const customAxios = axios.create({
    withCredentials: true
});

customAxios.defaults.baseURL = "https://us-west-2.aws.neurelo.com";
customAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

module.exports = {
    customAxios
};