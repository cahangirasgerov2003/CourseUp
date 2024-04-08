import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// const postSchema = new Schema({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// }, { collection: 'post' });

const post = mongoose.model("Post", postSchema);

export default post;
