const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lobbySchema = new Schema({
  lobbyName: { type: String, unique: true },
  lobbyOwner: { type: String },
  players: { type: Array }
})

const Lobby = mongoose.model('lobby', lobbySchema);

module.exports = Lobby;