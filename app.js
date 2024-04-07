import express from "express";

import { create } from "express-handlebars";

import mongoose from "mongoose";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.enable("view cache");
}

const port = 3000;

const hostname = "127.0.0.1";

mongoose.connect(`mongodb://127.0.0.1:27017/courses_db`);

app.use(express.static("src"));

const hbs = create();

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("site/index");
});

// { layout: false }

app.get("/about", (req, res) => {
  res.render("site/about");
});

app.get("/blog", (req, res) => {
  res.render("site/blog");
});

app.get("/blog-single", (req, res) => {
  res.render("site/blog-single");
});

app.get("/contact", (req, res) => {
  res.render("site/contact");
});

app.get("/login", (req, res) => {
  res.render("site/login");
});

app.get("/register", (req, res) => {
  res.render("site/register");
});

app.listen(port, hostname, () => {
  console.log(`Server: http://${hostname}:${port}`);
});
