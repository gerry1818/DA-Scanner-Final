const mongoose = require("mongoose");

let userTypeSchema = new mongoose.Schema(
{
	_id:
	{
		type: Number,
		required: true
	},
	userTypeName:
	{
		type: String,
		required: true
	}
});

 module.exports = mongoose.model("UserTypes", userTypeSchema);