import express from "express";

import { create } from "express-handlebars";

import mongoose from "mongoose";

import main from "./routes/main.js";

import posts from "./routes/posts.js";

import blog from "./routes/blog.js";

import users from "./routes/users.js";

import contact from "./routes/contact.js";

import admin from "./routes/admin/index.js";

import bodyParser from "body-parser";

import fileUpload from "express-fileupload";

import hbsHelpers from "./helpers/hbsHelpers.js";

import session from "express-session";

import methodOverride from "method-override";

// import crypto from "crypto";

import MongoStore from "connect-mongo";

// import helpers from "handlebars-helpers";
import _ from "lodash";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.enable("view cache");
}

const port = 3000;

const hostname = "127.0.0.1";

// const secret = crypto.randomBytes(32).toString("hex");

mongoose
  .connect(`mongodb://127.0.0.1/courses_db`)
  .then("Connected !")
  .catch("Connect error !");

app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1/courses_db",
      dbName: "courses_db",
      stringify: false,
    }),
  })
);

app.use(fileUpload());

app.use(express.static("src"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(methodOverride("_method"));

// FLASH - MESSAGES MIDDLEWARE

app.use((req, res, next) => {
  res.locals.sessionFlash = req.session.sessionFlash;
  delete req.session.sessionFlash;
  next();
});

// LINK SHOW MIDDLEWARE

app.use((req, res, next) => {
  if (req.session.userId) {
    res.locals.linkShow = true;
  } else {
    res.locals.linkShow = false;
  }
  next();
});

app.use("/", main);

app.use("/posts", posts);

app.use("/blog", blog);

app.use("/users", users);

app.use("/admin", admin);

app.use("/contact", contact);

const hbs = create({
  helpers: {
    generateDate: hbsHelpers.generateDate,
    textLengthControl: hbsHelpers.lengthControl,
    // ...helpers(),
    isEqual: _.isEqual,
    postLimit: hbsHelpers.postLimit,
    pagination: hbsHelpers.pagination,
  },
});

app.engine("handlebars", hbs.engine);

app.set("view engine", "handlebars");

app.set("views", "./views");

app.listen(port, hostname, () => {
  console.log(`Server: http://${hostname}:${port}`);
});
