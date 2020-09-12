const express = require('express');
const path = require('path');

const home = require('./routes/home');
const users = require('./routes/users');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(home);
app.use(users);

app.listen(3000);
