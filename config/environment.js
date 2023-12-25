require("dotenv").config();
const development = {
	// db: "mongodb://127.0.0.1:27017/HabitTracker",
	db:'process.env.db'
};
module.exports = development;
