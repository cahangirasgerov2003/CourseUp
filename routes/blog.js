import express from "express";

import posts from "../models/post.js";

import category from "../models/category.js";

const router = express.Router();

router.get("/", (req, res) => {
  posts
    .find({})
    .populate({ path: "author", method: "user" })
    .sort({ date: 1 })
    .lean()
    .then((response) => {
      category
        .aggregate([
          {
            $lookup: {
              from: "posts",
              localField: "_id",
              foreignField: "selectedCategory",
              as: "numberOfCategory",
            },
          },
          {
            $project: {
              _id: 1,
              categoryName: 1,
              number_of_category: {
                $size: "$numberOfCategory",
              },
            },
          },
        ])
        .then((response2) => {
          res.render("site/blog", { posts: response, categories: response2 });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

export default router;
