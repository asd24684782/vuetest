import axios from 'axios';

export default () => {
  const options = {};
  options.baseURL = "http://192.168.2.15:5000/api/1.0/echo";
  const instance = axios.create(options);
  return instance;
};