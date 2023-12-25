const express = require("express");
const router = express.Router();

const habitController = require("../controller/habit");
const trackerController = require("../controller/tracker");

//Create a new Habit
router.get("/create/:name", habitController.createHabit);

//Track a Habit
router.get("/track", trackerController.trackHabit);

//Delete a habit
router.get("/delete/:habitId", habitController.deleteHabit);

module.exports = router;
