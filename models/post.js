import mongoose from "mongoose";

import { Schema } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  post_file: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// const postSchema = new Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// }, { collection: 'post' });

export default mongoose.model("Post", postSchema);
