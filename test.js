import mongoose from "mongoose";

import post from "./models/post.js";

mongoose.connect(`mongodb://127.0.0.1/courses_test_db`);

// post
//   .create({
//     title: "Ikinci",
//     content: "Ilk post mezmunu",
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// post
//   .find({
//     title: "Ikinci",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// post
//   .find({})
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// post
//   .findByIdAndUpdate("6613c745e5708ded776176c1", {
//     title: "Updated post",
//     content: "Updated content",
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// post
//   .findByIdAndDelete("6613c745e5708ded776176c1")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
