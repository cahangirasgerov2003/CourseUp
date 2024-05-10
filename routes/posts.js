import express from "express";

import post from "../models/post.js";

import path from "path";

import { fileURLToPath } from "url";

import category from "../models/category.js";

const router = express.Router();

router.get("/new", (req, res) => {
  category
    .find({})
    .lean()
    .then((result) => {
      res.render("site/add-post", { categories: result });
    });
});

router.get("/:id", (req, res) => {
  post
    .findById(req.params.id)
    .populate({ path: "author", method: "user" })
    .populate({ path: "selectedCategory", method: "category" })
    .lean()
    .then((response) => {
      category
        .find({})
        .sort({ data: -1 })
        .lean()
        .then((response2) => {
          post
            .find({})
            .lean()
            .then((response3) => {
              res.render("site/post-single", {
                post: response,
                categories: response2,
                posts: response3,
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    });
});

router.post("/test", (req, res) => {
  let post_file = req.files.post_file;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  post_file.mv(path.resolve(__dirname, "../src/img/posts", post_file.name));
  post.create({
    ...req.body,
    post_file: `/img/posts/${post_file.name}`,
    author: req.session.userId,
  });

  req.session.sessionFlash = {
    type: "alert alert-success",
    message: "Postunuz başarili şəkildə əlavə edildi",
  };

  res.redirect("/blog");
});

export default router;
