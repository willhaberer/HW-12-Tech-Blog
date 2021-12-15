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
