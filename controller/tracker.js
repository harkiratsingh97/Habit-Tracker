const Tracker = require("../models/tracker");
const Habit = require("../models/habit");

//Controller function to track a new habit or update an existing Habit
module.exports.trackHabit = async function (req, res) {
	try {
		//Check if the track record exist for a particular date of a habit
		let habitExist = await Tracker.findById(req.query.trackId);

		//If the track record exists then update the state of the record
		if (habitExist) {
			habitExist.state = req.query.state;
			habitExist.save();
			// console.log('habit already tracked for today')
			return res.redirect("back");
		}

		//If the track record does not exists then creating a new record
		let trackedHabit = await Tracker.create({
			habit: req.query.habit,
			state: req.query.state,
			date: req.query.date,
		});

		//If the record is created then add the id of the track record to Habit in habitTracked array
		if (trackedHabit) {
			await Habit.findByIdAndUpdate(req.query.habit, {
				$push: { habitTracked: trackedHabit._id },
			});
			return res.redirect("back");
		}
	} catch (err) {
		console.log(err);
		return res.json(500).json({ message: "Internal server Error" });
	}
};
