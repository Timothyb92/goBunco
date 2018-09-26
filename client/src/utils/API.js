import axios from 'axios';

export default {
  //USER ROUTES ==================================
  createUser: data => {
    return axios.post('api/users', data)
  },
  verifyUser: data => {
    console.log(`verifyUser running in API.js`)
    return axios.post(`/api/users/verify/${data.userName}`, data)
  },
  getUserInfo: userId => {
    console.log(`getUserInfo executing line13 api.js`);
    console.log(userId);
    return axios.get(`/api/users/${userId}`)
  },
  //LOBBY ROUTES ===================================
  createLobby: data => {
    console.log(`createLobby running in API.js`);
    return axios.post(`/api/lobbies`, data)
  },
  joinLobby: data => {
    console.log(`joinLobby running in API.js`);
    console.log(data);
    return axios.put(`/api/lobbies`, data)
  }
}