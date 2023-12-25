const express = require("express");
const router = express.Router();

const homeController = require("../controller/home");
const middleware = require("../middlewares/middleware");

//Route to get the Detail view of Habit Tracker app
router.get(
	"/",
	middleware.getAllHabits,
	middleware.modifyHabitsForView,
	homeController.homePageDetailView
);

//Route to get the Week View of Habit Tracker app
router.get('/week-view', 
middleware.getAllHabits,
middleware.modifyHabitsForView,
homeController.homePageWeekView)

module.exports = router;
