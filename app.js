const path = require("path");

const express = require("express");

const exphbs = require("express-handlebars");

const app = express();

const port = 3000;

const hostname = "127.0.0.1";

app.use(express.static("src"));

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "public/index.html"));
  res.render("site/index");
});

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

app.listen(port, hostname, () => {
  console.log(`Server: http://${hostname}:${port}`);
});
