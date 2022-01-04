const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Blog, Comment } = require("../models");
const path = require("path");
const withAuth = require("../utils/auth");
const getBlogs = require("../utils/getblogs.js");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/blogs", withAuth, async (req, res) => {
  const blogs = getBlogs;
  res.render("blogs", blogs);
});

router.get("/create", withAuth, async (req, res) => {
  res.render("create");
});

module.exports = router;
