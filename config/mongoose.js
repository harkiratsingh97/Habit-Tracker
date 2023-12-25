const mongoose = require("mongoose");
const env = require("./environment");
//Creating a connection to MongoDB

console.log(process.env.db)
mongoose.connect(process.env.db);


const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
	console.log("Connected to Database :: MongoDB");
});

module.exports = db;
