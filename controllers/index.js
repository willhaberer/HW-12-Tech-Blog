const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Blog, Comment } = require("../models");
const path = require("path");
const withAuth = require("../utils/auth");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signup", async (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

router.get("/blogs", withAuth, async (req, res) => {
  res.render("blogs", { loggedIn: req.session.loggedIn });
});

router.get("/create", withAuth, async (req, res) => {
  res.render("create", { loggedIn: req.session.loggedIn });
});

module.exports = router;
