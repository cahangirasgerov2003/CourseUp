import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Session control", req.session);
  res.render("site/index");
});

// { layout: false }

router.get("/about", (req, res) => {
  res.render("site/about");
});

// router.get("/blog-single", (req, res) => {
//   res.render("site/blog-single");
// });

router.get("/contact", (req, res) => {
  res.render("site/contact");
});
export default router;
