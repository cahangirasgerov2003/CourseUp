const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

const hostname = "127.0.0.1";

app.use(express.static("src"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/about.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/blog.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/contact.html"));
});

app.listen(port, hostname, () => {
  console.log(`Server: http://${hostname}:${port}`);
});
