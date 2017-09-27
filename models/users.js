const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
	name:{
		type: String,
		required:true
	},
	email:{
		type: String,
		required:true,
		unique: true
	},
	role: {
		type: String,
		required: true
	}
});

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;