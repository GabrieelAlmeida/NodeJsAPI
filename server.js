
const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

//Connecting DB;
const mongoose = require('mongoose');
// Caso vc tenha usuário e senha mongoose.connect('mongodb://user@password');
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

//Importing All Models;
requireDir('./src/models/');



//Using Routes;
app.use('/api', require('./src/routes'));





app.listen(3001);