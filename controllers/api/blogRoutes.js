const router = require("express").Router();
const sequelize = require("../../config/connection");
const Blog = require("../../models/Blog.js");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll();
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  data = req.body;
  try {
    const blogData = await Blog.create({
      title: data.title,
      content: data.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogData);
    console.log(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
