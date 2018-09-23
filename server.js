import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from 'routes';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/bunco"
);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
