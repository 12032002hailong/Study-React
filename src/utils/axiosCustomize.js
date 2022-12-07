import axios from 'axios';
import NProgress from 'nprogress';

NProgress.configure({
    showSpinner: false,
    // easing:'ease',
    // speed:500,
    // trickleRate:0.5,
    // easing:'ease',
    // speed:200,
    // trickle:true,
    // trickleRate:0.02,
    trickleSpeed: 100,
})


const instance = axios.create({
    baseURL: 'http://localhost:8081/',
});

instance.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    NProgress.done();
    return response && response.data ? response.data : response;
}, function (error) {
    return error && error.response && error.response.data
        ? error.response.data : Promise.reject(error);
});


export default instance;