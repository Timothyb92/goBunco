const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/api/users')
  .get(userController.findAll)
  .post(userController.create);

router.route('/api/users/:userName')
  .get(userController.findById);
  
router.route('/api/users/verify/:userName')
  .post(userController.verifyUser);

module.exports= router;