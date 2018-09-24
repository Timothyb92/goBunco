import axios from 'axios';

export default {
  createUser: data => {
    return axios.post('api/users', data)
  },
  verifyUser: data => {
    // console.log(`verifyUser running in API.js`)
    // console.log(data);
    return axios.post(`api/users/${data.userName}`, data)
  },
  getUserInfo: userId => {
    console.log(`getUserInfo executing line13 api.js`);
    console.log(userId);
    return axios.get(`api/users/${userId}`)
  }
}