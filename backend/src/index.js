const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// Metodos Get, Post, Put, Delete
// Parâmetros Query, Route, Bodynodno
app.listen(3333);