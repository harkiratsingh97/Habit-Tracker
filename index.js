const express = require("express");
const PORT = "8080";
const app = express();
const db = require("./config/mongoose");
var path = require("path");

//Parsing body
app.use(express.urlencoded());

//Adding view as Ejs
let expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Adding static
app.use(express.static("./assets"));

//Extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//Routing to index.js in routes
app.use("/", require("./routes/index"));

//Listening to the server on mentioned PORT
app.listen(PORT, (err) => {
	if (err) {
		console.log("Error in starting Server ", err);
	}
	console.log("Server is up and running at port ", PORT);
});
