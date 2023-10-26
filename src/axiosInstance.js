// axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.21.52.149:3000', // Replace with your API URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    credentials: 'include',
    // You can add more common headers here
  },
});

// Interceptors for handling requests and responses
instance.interceptors.request.use(
  config => {
    // You can add request headers or perform other operations here
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    // You can handle successful responses here
    return response;
  },
  error => {
    // You can handle errors here, e.g., by showing a toast or logging
    return Promise.reject(error);
  },
);

export default instance;
