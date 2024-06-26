import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("site/index");
});

// { layout: false }

router.get("/about", (req, res) => {
  res.render("site/about");
});

router.get("/contact", (req, res) => {
  res.render("site/contact");
});
export default router;
