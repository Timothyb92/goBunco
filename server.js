const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const socket = require('socket.io');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

const server = app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bunco",
  { useNewUrlParser:true }
  );
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected')
  });

const io = socket(server);

io.on('connection', socket => {
  console.log('User connected');
})

