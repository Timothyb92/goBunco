const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
  .get(userController.findAll)
  .post(userController.create);

router.route('/api/users/:userName')
  .get(userController.findById)
  .post(userController.verifyUser);

module.exports= router;