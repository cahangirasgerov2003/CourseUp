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
      req.session.sessionFlash = {
        type: "alert alert-info",
        message: "Kullanici başarili şəkildə oluşduruldu",
      };
      res.redirect("login");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/logOut", (req, res) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("login");
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
