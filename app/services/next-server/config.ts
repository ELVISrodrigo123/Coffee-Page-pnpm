import axios from "axios";

export const ServicesCoffee = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    timeout: 10000,
    headers:{}
})

ServicesCoffee.interceptors.request.use(
    function (config){
/*         console.log(config) */
        return config;
    },
    function (error){
return Promise.reject(error)
    }
);

ServicesCoffee.interceptors.response.use(
    function (response){
        /* console.log(response) */
        return response;
    },
    function(error){
        return Promise.reject(error)
    }
)