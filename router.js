const express = require('express');

const router = express.Router();
const path = require('path');
const Users = require('./models/users');

router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/users', (req, res) => {
	Users.find({}).then(response => res.send(response));
});

router.get('/users/:id', (req, res, next) => {
	Users.findOne({_id:req.params.id})
	.then(response => res.send(response))
	.catch(next);
});

router.post('/users', (req, res, next) => {
	Users.create(req.body)
	.then(response => res.send(response))
	.catch(next);
});

router.put('/users/:id', (req, res) => {
	Users.findOneAndUpdate({_id:req.params.id}, req.body)
	.then( response => {
		Users.findOne({_id:req.params.id}).then(newResponse => res.send(newResponse));
	});
});

router.delete('/users/:id',  (req, res) => {
	Users.findOneAndRemove({_id:req.params.id}).then(response => res.send(response));
});

module.exports = router;