import express from "express";

import Category from "../../models/category.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/admin/index");
});

router.get("/categories", (req, res) => {
  Category.find({})
    .lean()
    .then((response) => {
      res.render("site/admin/categories", { categories: response });
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

export default router;
