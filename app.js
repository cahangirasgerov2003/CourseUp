import express from "express";

import { create } from "express-handlebars";

import mongoose from "mongoose";

import main from "./routes/main.js";

import posts from "./routes/posts.js";

import blog from "./routes/blog.js";

import bodyParser from "body-parser";

import fileUpload from "express-fileupload";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.enable("view cache");
}

const port = 3000;

const hostname = "127.0.0.1";

mongoose
  .connect(`mongodb://127.0.0.1/courses_db`)
  .then("Connected !")
  .catch("Connect error !");

app.use(fileUpload());

app.use(express.static("src"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// const middleware = (req, res, next) => {
//   console.log("Salam");
//   next();
// };

// app.use("/", middleware);

app.use("/", main);

app.use("/posts", posts);

app.use("/blog", blog);

const hbs = create();

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.set("views", "./views");

app.listen(port, hostname, () => {
  console.log(`Server: http://${hostname}:${port}`);
});
