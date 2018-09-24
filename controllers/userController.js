const db = require('../models');

module.exports = {
  findAll: (req, res) => {
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
    const user = {
      // _id: req.body._id,
      userName: req.body.userName,
      password: req.body.password
    };
    db.User
      .create(user)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  verifyUser: (req, res) => {
    db.User
      .findOne({
        userName: req.body.userName
      })
      .then(dbUser => {
        // console.log(dbUser.password);
        if(dbUser.password === req.body.password) {
          console.log('Password match');
        } else {
          console.log('Password wrong')
        }
      })
  }
}