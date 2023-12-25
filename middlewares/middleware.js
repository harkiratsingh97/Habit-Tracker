const Habit = require("../models/habit");

//Get all the habits and populate the Habit Tracked days
module.exports.getAllHabits = async function (req, res, next) {
	try {
		let habits = await Habit.find().populate({
			path: "habitTracked",
		});

		if (habits) {
			req.habits = habits;
			return next();
		} else {
			return res.json({ message: "Error while fetching Habits" });
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};

//Modify habits object in req as per requirement
module.exports.modifyHabitsForView = async function (req, res, next) {
	try {
		//Get the current date
		let date = new Date();
		date.setHours(0, 0, 0, 0);

		//Adding total number of days and habit tracked days in req.habit object
		req.habits = await req.habits.map(function (habit) {
			//Calculating total number of days from the day of creation of habit
			habit.daysTillNow = Math.floor(
				(date - habit.createdAt) / (1000 * 60 * 60 * 24) + 1
			);
			//Calculating the number of days for which the habit is tracked
			habit.daysTracked = habit.habitTracked.length;
			habit.habitTracked.sort((a, b) => {
				return a.date - b.date;
			});
			//Getting current date in curDate and reverse sorting habitTracked array

			// habit.habitTracked.reverse();

			//Setting last week tracking detail for view
			let x = 0;

			for (let i = habit.habitTracked.length - 1, curDate = date; x < 7; i--) {
				if (
					habit.habitTracked[i] &&
					habit.habitTracked[i].date.toString().slice(0, 15) ==
						curDate.toString().slice(0, 15)
				) {
					curDate = new Date(curDate - 24 * 60 * 60 * 1000);
					x++;
					continue;
				} else {
					habit.habitTracked.splice(i + 1, 0, { date: curDate, state: "-" });
					curDate = new Date(curDate - 24 * 60 * 60 * 1000);
					i++;
					x++;
				}
			}

			habit.weeklyCompleted = 0;
			for (let track of habit.habitTracked) {
				if (track.state == "Done") habit.weeklyCompleted += 1;
			}
			// console.log(habit.habitTracked);
			return habit;
		});
		req.curDate = date.getDate().toString();

		return next();
	} catch (err) {
		console.log(err);
		return res.status(500).json({ message: "Internal Server Error" });
	}
};
