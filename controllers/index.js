const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

router.use("/api", apiRoutes);

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
