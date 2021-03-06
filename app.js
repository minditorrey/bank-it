'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './views/index.html'));
});


var server = http.createServer(app);
server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});