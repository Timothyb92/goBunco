const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
// const dbLobby = require('./controllers/lobbyController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


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
  
  const http = require('http').createServer(app);
  const io = require('socket.io')(http);
  
  let playersArray = [];
  io.on('connection', socket => {
    // console.log(socket.id);
    // console.log('A user connected');

    // socket.on('disconnect', socket => {
      // console.log('user disconnected')
      // console.log(socket)
    // })

    socket.on('room', data => {

      // let nsp = io.of(`/${data.lobbyName}`)
      // nsp.on('connection', () => console.log('connected to nsp'))


      const playerName = data.userName
      if (playersArray.indexOf(data.userName) === -1) {
        playersArray.push(data.userName);
      }
      socket.join(data.room)
      io.in(data.room).clients((err, clients) => {
        console.log(clients)
      })
      // io.to(data.room).emit(data.lobbyName, playersArray);
      io.sockets.emit(data.lobbyName, playersArray)

      socket.on('disconnect', () => {
        playersArray = playersArray.filter(player => player !== playerName)
        // io.to(data.room).emit(data.lobbyName, playersArray)
        io.sockets.emit(data.lobbyName, playersArray)
      });

      socket.on('leave lobby', () => {
        playersArray = playersArray.filter(player => player !== playerName)
        // io.to(data.room).emit(data.lobbyName, playersArray)
        io.sockets.emit(data.lobbyName, playersArray)
      });

      socket.on('close lobby', () => {
        // io.to(data.room).emit('close lobby')
        io.sockets.emit('close lobby')
      })

      socket.on('start game', () => {
        io.sockets.emit('start game')
      })
    });


  })

http.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);

