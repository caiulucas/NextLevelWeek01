import axios from 'axios';

const api = axios.create({
  baseURL: 'http://5f405c60a4b5.ngrok.io',
});

export default api;