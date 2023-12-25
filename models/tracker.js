const mongoose = require("mongoose");

const trackerSchema = new mongoose.Schema(
	{
		state: {
			type: String,
			enum: ["Done", "Not Done", "-"],
		},
		habit: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Habit",
		},
		date: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

const Tracker = mongoose.model("Tracker", trackerSchema);
module.exports = Tracker;
