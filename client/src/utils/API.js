import axios from 'axios';

export default {
  //USER ROUTES ==================================
  createUser: data => {
    return axios.post('api/users', data)
  },
  verifyUser: data => {
    return axios.post(`/api/users/verify/${data.userName}`, data)
  },
  getUserInfo: userId => {
    return axios.get(`/api/users/${userId}`)
  },
  //LOBBY ROUTES ===================================
  createLobby: data => {
    return axios.post(`/api/lobbies`, data)
  },
  joinLobby: data => {
    return axios.put(`/api/lobbies`, data)
  },
  updatePlayers: data => {
    return axios.put(`/api/lobbies/${data.lobbyId}`, data)
  }
}