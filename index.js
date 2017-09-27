const express = require('express');

const app = express();
const parser = require('body-parser');
const routers = require('./router');
const mongoose = require('mongoose');

//mongodb connection
mongoose.connect('mongodb://localhost:27017/user-api');
mongoose.Promise = global.Promise;

//initial body parser
app.use(parser.json());

//initial router
app.use(routers);

//error middleware
app.use(function(err, req, res, next) {
	res.status(422).send({err: err.message});
});

app.listen(8081, () => {
	console.log("App running on localhost:8081");
});