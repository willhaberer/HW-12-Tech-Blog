const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

//gets all homepage posts
router.get("/", (req, res) => {
  Blog.findAll({
    attributes: ["id", "title", "content", "user_id"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((data) => {
      const blogs = data.map((blog) => blog.get({ plain: true }));

      res.render("blogs", {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
