const router = require("express").Router();
const sequelize = require("../../config/connection");
const Comment = require("../../models/Comment.js");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  data = req.body;
  try {
    const commentData = await Comment.create({
      content: data.content,
      blog_id: data.blog_id,
      user_id: data.user_id,
    });
    res.status(200).json(commentData);
    console.log(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
