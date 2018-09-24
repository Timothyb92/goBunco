const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    console.log(req.body);
    console.log(`userController.js line 6`);
    db.User
      .find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log(`userController.js create method line 19 executed`);
    console.log(req.body);
    const user = {
      // _id: req.body._id,
      userName: req.body.userName,
      password: req.body.password
    };
    console.log(user);
    db.User
      .create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
}