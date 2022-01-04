const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");
const withAuth = require("../utils/auth");

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
  res.render("blogs");
});

router.get("/create", withAuth, async (req, res) => {
  res.render("create");
});

module.exports = router;
