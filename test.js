import mongoose from "mongoose";

import post from "./models/post.js";

mongoose
  .connect(`mongodb://127.0.0.1/courses_test_db`)
  .then(() => console.log("Okey"))
  .catch(() => console.log("NOOO"));

post
  .create({
    title: "Benim ilk post başligim",
    content: "Ilk post mezmunu",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
