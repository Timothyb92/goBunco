const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lobbySchema = new Schema({
  lobbyName: { type: String },
  lobbyOwner: { type: String }
})

const Lobby = mongoose.model('lobby', lobbySchema);

module.exports = Lobby;