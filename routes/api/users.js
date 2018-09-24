const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/')
  .get(userController.verifyUser)
  .post(userController.create);

router
  .route('/:userName')
  .post(userController.verifyUser);

module.exports= router;