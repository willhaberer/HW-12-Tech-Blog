require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super Secret Number",
  resave: false,
  saveUninitialized: false, //only have saved when we use like a login
};

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);
app.use(express.static(path.join(__dirname, "public")));
//"turn on" public folder

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
});
