const { MONGO_USER, MONGO_PASS, MONGO_DB } = require('../.env');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-owbos.mongodb.net/${MONGO_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);