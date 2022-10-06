const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please, Enter your Username !"],
	},
	email: {
		type: String,
		required: [true, "Please, Enter your Email !"],
		unique: true
	},
	password: {
		type: String,
		required: [true, "Please, Enter your Password !"],
	},
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
