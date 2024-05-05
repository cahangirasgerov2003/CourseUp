import express from "express";

import Category from "../../models/category.js";

import Posts from "../../models/post.js";

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

export default router;
