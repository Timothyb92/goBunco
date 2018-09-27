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
        .then(dbLobbyFindOne => res.json(dbLobbyFindOne)
        //   {
        //   const playersArray = dbLobbyFindOne.players;
        //   playersArray.push(req.body.userName);
        //   db.Lobby
        //     .findOneAndUpdate({
        //       lobbyName: req.body.lobbyName
        //     },
        //     {
        //       players: playersArray
        //     })
        //       .then(dbLobbyFindOneAndUpdate => res.json(dbLobbyFindOneAndUpdate))
        //       .catch(err => res.status(422).json(err));
        // })
        )},
  updatePlayers: (req, res) => {
    // console.log('vvv request body on updatePlayers method lobbyController.js vvv')
    // console.log(req.body);
    db.Lobby
      .findOne({ _id: req.body.lobbyId })
        .then(dbLobby => 
          {
          // const playersArray = dbLobby.players;
          // console.log(req.body.players);
          db.Lobby
          .findOneAndUpdate({
            _id: req.body.lobbyId
          },
          {
            players: req.body.players
          })
          .then(dbLobbyUpdated => console.log(dbLobbyUpdated))
          // console.log(playersArray);
        }
        )
  }
}