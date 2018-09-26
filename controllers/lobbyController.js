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
  },
  updatePlayers: (req, res) => {
    console.log('vvv request body on updatePlayers method lobbyController.js vvv')
    console.log(req.body);
    db.Lobby
      .findOne({ lobbyName: req.body.lobbyName })
        .then(dbLobby => {
          const playersArray = dbLobby.players;
          if (playersArray.indexOf(req.userName) !== -1) {
            playersArray.push(req.body.userName);
            db.Lobby
              .findOneAndUpdate({
                lobbyName: req.body.room
              },
              {
                players: playersArray
              })
          }
        })
  }
}