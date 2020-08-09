import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.1:3333' //change baseURL to back end connect
})

export default api;