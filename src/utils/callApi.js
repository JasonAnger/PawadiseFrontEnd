import axios from "axios";

// const API_URL = "https://pawadise.me:3000";
const API_URL = "http://localhost:3000";
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${API_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err);
  });
}
