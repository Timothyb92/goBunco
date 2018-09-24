import axios from 'axios';

export default {
  createUser: data => {
    return axios.post('api/users', data)
  },
  verifyUser: data => {
    // console.log(`verifyUser running in API.js`)
    // console.log(data);
    return axios.post(`api/users/${data.userName}`, data)
  }
}