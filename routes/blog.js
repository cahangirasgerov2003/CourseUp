import express from "express";

import posts from "../models/post.js";

const router = express.Router();

router.get("/", (req, res) => {
  posts
    .find({})
    .lean()
    .then((response) => {
      res.render("site/blog", { posts: response });
    })
    .catch((err) => console.log(err));
});

export default router;
