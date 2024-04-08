import express from "express";

import { create } from "express-handlebars";

import mongoose from "mongoose";

import main from "./routes/main.js";

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

app.use(express.static("src"));

const hbs = create();

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.set("views", "./views");

app.use("/", main);

app.listen(port, hostname, () => {
  console.log(`Server: http://${hostname}:${port}`);
});
