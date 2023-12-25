const mongoose = require("mongoose");

//Creating a connection to MongoDB
mongoose.connect("mongodb+srv://harkirat:Q9hWPDq1sjVzJRqx@cluster0.s9jgarw.mongodb.net/?retryWrites=true&w=majority").then(() => {
	console.log("DB connected successfully");
});
