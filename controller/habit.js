const Habit = require("../models/habit");
const Tracker = require("../models/tracker");
//Controller to create a New habit
module.exports.createHabit = async function (req, res) {
	try {
		const newHabit = await Habit.create({ name: req.params.name });
		if (newHabit) {
			return res.redirect("/");
		} else {
			return res.json({ message: "Error while creating new Habit" });
		}
	} catch (err) {
		console.log(err);
		return res.json(500).json({ message: "Internal server Error" });
	}
};

module.exports.deleteHabit = async function (req, res) {
	try {
		const deleteHabit = await Habit.findByIdAndDelete(req.params.habitId);
		if (deleteHabit) {
			const deleteTracks = await Tracker.deleteMany({
				habit: req.params.habitId,
			});
			return res.redirect("/");
		} else {
			return res.json({ message: "Error while creating new Habit" });
		}
	} catch (err) {
		console.log(err);
		return res.json(500).json({ message: "Internal server Error" });
	}
};
