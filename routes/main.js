import express from "express";

const router = express.Router();

// express.Router bir middlewaredir yani ara yazilim

router.get("/", (req, res) => {
  res.render("site/index");
});

// { layout: false }

router.get("/about", (req, res) => {
  res.render("site/about");
});

router.get("/blog", (req, res) => {
  res.render("site/blog");
});

router.get("/blog-single", (req, res) => {
  res.render("site/blog-single");
});

router.get("/contact", (req, res) => {
  res.render("site/contact");
});

router.get("/login", (req, res) => {
  res.render("site/login");
});

router.get("/register", (req, res) => {
  res.render("site/register");
});

export default router;
