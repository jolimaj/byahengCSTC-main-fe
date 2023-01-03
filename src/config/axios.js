const axios = require("axios").default;
const instance = axios.create();
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // config.baseURL = "http://localhost:8080";
    config.baseURL = "https://byaheng-cstc-api.herokuapp.com";
    config.headers.post["Content-Type"] = "application/json;charset=utf-8";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE";
    config.headers["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-With, Content-Type, Accept";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports = instance;
