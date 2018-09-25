const router = require('express').Router();
const lobbyController = require('../../controllers/lobbyController');

router.route('/api/lobbies')
  .get(lobbyController.findAll)
  .post(lobbyController.create);

  module.exports = router;