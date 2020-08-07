import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});
// change basURL to back-end API connection

export default api;