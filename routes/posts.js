import express from "express";

import post from "../models/post.js";

import path from "path";

import { fileURLToPath } from "url";

const router = express.Router();

router.get("/new", (req, res) => {
  req.session.userId
    ? res.render("site/add-post")
    : res.redirect("/users/login");
});

router.get("/:id", (req, res) => {
  post
    .findById(req.params.id)
    .lean()
    .then((response) => {
      res.render("site/post-single", { post: response });
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
  });

  req.session.sessionFlash = {
    type: "alert alert-success",
    message: "Postunuz başarili şəkildə əlavə edildi",
  };

  res.redirect("/blog");
});

export default router;
