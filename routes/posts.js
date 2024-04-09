import express from "express";

import post from "../models/post.js";

const router = express.Router();

router.get("/new", (req, res) => {
  res.render("site/add-post");
});

router.post("/test", (req, res) => {
  post.create(req.body);
  res.redirect("/");
});

export default router;
