const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		habitTracked: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Tracker",
			},
		],
	},
	{
		timestamps: true,
	}
);

const Habit = mongoose.model("Habit", habitSchema);
module.exports = Habit;
