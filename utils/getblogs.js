const { User, Blog, Comment } = require("../models");

const getBlogs = async (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  try {
    const blogData = await Blog.findAll();
    console.log(blogData);

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    console.log(blogs);
    return blogs;
  } catch (err) {
    console.log("oops");
  }
};

module.exports = getBlogs;
