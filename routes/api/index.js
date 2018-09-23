const router = require('express').Router();
import userRoutes from './users';
import lobbyRoutes from './lobbies';

router.use('/users', userRoutes);
router.use('lobbies', lobbyRoutes);

module.exports = router;