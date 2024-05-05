import express from "express";

import Category from "../../models/category.js";

import Posts from "../../models/post.js";

import { fileURLToPath } from "url";

import path, { dirname } from "path";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/admin/index");
});

router.get("/categories", (req, res) => {
  Category.find({})
    .sort({ $natural: -1 })
    .lean()
    .then((response) => {
      res.render("site/admin/categories", {
        categories: response,
      });
    });
});

router.post("/categories", (req, res) => {
  Category.create(req.body)
    .then(() => {
      res.redirect("categories");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/categories/:id", (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/admin/categories");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/allPosts/:id", (req, res) => {
  Posts.deleteOne({ _id: req.params.id })
    .then(() => {
      res.redirect("/admin/posts");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/posts", (req, res) => {
  // res.render("site/admin/allPosts");
  Posts.find({ author: req.session.userId })
    .populate({ path: "selectedCategory", method: "category" })
    .sort({ $natural: -1 })
    .lean()
    .then((response) => {
      res.render("site/admin/allPosts", { posts: response });
    })
    .catch((err) => console.log(err));
});

router.get("/posts/edit/:id", (req, res) => {
  Posts.findById(req.params.id)
    .lean()
    .then((response) => {
      Category.find({})
        .lean()
        .then((result) => {
          res.render("site/admin/editPost", {
            post: response,
            categories: result,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

router.put("/post/edit/:id", (req, res) => {
  let post_file = req.files.post_file;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  post_file.mv(path.resolve(__dirname, "../../src/img/posts", post_file.name));

  Posts.findById(req.params.id)
    .then((result) => {
      result.title = req.body.title;
      result.content = req.body.content;
      result.date = req.body.date;
      result.post_file = `/img/posts/${post_file.name}`;
      result.selectedCategory = req.body.selectedCategory;
      result
        .save()
        .then(() => {
          res.redirect("/admin/posts");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
