const router = require('express').Router();
const lobbyController = require('../../controllers/lobbyController');

router.route('/api/lobbies')
  // .get(lobbyController.findAll)
  .post(lobbyController.create)
  .put(lobbyController.joinLobby);

router.route('/api/lobbies/:lobbyId')
  .put(lobbyController.updatePlayers);

  module.exports = router;