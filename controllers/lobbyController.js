const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    console.log(`Running findAll in lobbyController.js`);
    db.Lobby
      .find(req.query)
      .then(dbLobby => res.json(dbLobby))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log(`Running create method in lobbyController.js`);
    db.Lobby
      .create(req.body)
      .then(dbLobby => res.json(dbLobby))
      .catch(err => res.status(422).json(err));
  }
}