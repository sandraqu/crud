import axios from "axios";

const URL = "http://localhost:3000";
const adder = (url, data) => {
  return axios.post(URL + url, data).then((res) => res.data);
};
const getter = (url) => {
  return axios.get(URL + url).then((res) => res.data);
};

const updater = (url, data) => {
  return axios.put(URL + url, data).then((res) => res.data);
};

const remover = (url) => {
  return axios.delete(URL + url).then((res) => res.data);
};

export { adder, getter, updater, remover };
