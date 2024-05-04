import mongoose from "mongoose";

import { Schema } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  selectedCategory: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  // ref db-de hara ile elaqe saxlamaq isteyirsense onu yazirsan ve ya models adini Category
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post_file: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Post", postSchema);
