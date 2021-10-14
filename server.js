//dependencies
const express = require("express");
const exphbs = require("express-handlebars")

//create express server
var app = express()

//define PORT where server will listen for requests (production || developement)
var PORT = process.env.PORT || 8080;

//require models for syncing models are a js representation of the tables in the db
var db = require("./models");

//set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set the static directory to the public dir (can't be changed after we send them to client so "static")
app.use(express.static("public"));

// setup handelbars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//routes
// const initRoutes = require("./routes/routes");
// //api routes for handling data exchanges
// initRoutes(app);
// require("./routes/routes.js")(app);

// start the server. {force:true} drops the tables from exisiting db. {force:false} keeps the existing db and tables and data in place
db.sequelize.sync({
    force: false
  }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening at http://localhost:" + PORT);
    });
  });