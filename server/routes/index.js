// //List all Routes you want to add to the App
const movieController = require("../app/controllers/movie.js");
const authController = require("../app/controllers/auth.js");
var Request = require("../app/requests/authRequest");
// GII database
var mongo_express = require("mongo-express/lib/middleware");
var mongo_express_config = require("../mongo_express_config");
var auth = require("../app/middleware/auth");
var swaggerUi = require("swagger-ui-express");
var swaggerDocument = require("../docs/api-doc.json");

var express = require("express");
var router = express.Router();
var cors = require("cors");

module.exports = function(app) {
  app.use(cors());
  app.get("/", (req, res) => {
    res.redirect("/docs/v1");
  });
  app.use("/mongo_db", mongo_express(mongo_express_config));
  app.use("/docs/v1", swaggerUi.serve, (req, res) => {
    res.status(200).send(swaggerUi.generateHTML(swaggerDocument));
  });
  // app.prefix("/api/v1", route => {
  // User Authentication
  app.post("/login", Request.validate("login"), authController.login);
  app.post("/register", Request.validate("register"), authController.register);

  // Authenticated Route
  app.get("/me", auth, authController.me);
  app.get("/getMovies", movieController.index);

  // Logout Routes
  app.post("/logout", auth, authController.logout);
  app.post("/logout/all", auth, authController.logoutall);
  // });

  // Not Found
  app.get("**", (req, res) => {
    res.status(404).send({ error: "Route not found" });
  });
};
