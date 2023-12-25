//Controller to render Home Page Detail View
module.exports.homePageDetailView = async function (req, res) {
	try {
		// console.log(req.habits);
		return res.render("home.ejs", {
			title: "Habit Tracker",
			habits: req.habits,
		});
	} catch (err) {
		// console.log(err);
		return res.json(500).json({ message: "Internal server error" });
	}
};

//Controller to render Home Page Week View
module.exports.homePageWeekView = async function (req, res) {
	try {
		return res.render("home-week-view.ejs", {
			title: "Habit Tracker",
			habits: req.habits,
			curDate: req.curDate,
		});
	} catch (err) {
		// console.log(err);
		return res.json(500).json({ message: "Internal server error" });
	}
};
