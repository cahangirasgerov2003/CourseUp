import express from "express";
import user from "../models/user.js";

const router = express.Router();

router.get("/register", (req, res) => {
  res.render("site/register");
});

router.post("/register", (req, res) => {
  user
    .create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/login", (req, res) => {
  res.render("site/login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  user
    .findOne({
      email,
    })
    .then((response) => {
      // response
      //   ? response.password === password
      //     ? res.redirect("/")
      //     : res.redirect("/users/login")
      //   : res.redirect("/users/register");

      if (response) {
        if (response.password === password) {
          req.session.userId = response._id;
          res.redirect("/");
        } else res.redirect("/users/login");
      } else res.redirect("/users/register");
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
