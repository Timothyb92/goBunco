const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Lobby
      .find(req.query)
      .then(dbLobby => res.json(dbLobby))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Lobby
      .create(req.body)
      .then(dbLobby => res.json(dbLobby))
      .catch(err => res.status(422).json(err));
  },
  joinLobby: (req, res) => {
    db.Lobby
      .findOne({ lobbyName: req.body.lobbyName })
        .then(dbLobbyFindOne => {
          const playersArray = dbLobbyFindOne.players;
          playersArray.push(req.body.userName);
          db.Lobby
            .findOneAndUpdate({
              lobbyName: req.body.lobbyName
            },
            {
              players: playersArray
            })
              .then(dbLobbyFindOneAndUpdate => res.json(dbLobbyFindOneAndUpdate))
              .catch(err => res.status(422).json(err));
        })
      // .findOneAndUpdate({
      //   lobbyName: req.body.lobbyName
      // },
      // {
      //   players: players.push(req.body.userName)
      // }).then(dbLobby => res.json(dbLobby))
  }
}