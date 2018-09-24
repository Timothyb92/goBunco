const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    console.log(req.params.userName)
    console.log('findbyid')
    db.User
      .findById(req.params.userName)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const user = {
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
        if(dbUser.password === req.body.password) {
          console.log(req.body);
          console.log('Password match');
          return res.json(dbUser._id);
        } else {
          console.log('Password wrong')
        }
      })
  }
}