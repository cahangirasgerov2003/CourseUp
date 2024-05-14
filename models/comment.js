import mongoose from "mongoose";

import { Schema } from "mongoose";

const commentSchema = new Schema({
  commenterName: {
    type: String,
    required: true,
    // unique: true,
  },
  commenterEmail: {
    type: String,
    required: true,
    // unique: true,
  },
  contentOfComment: {
    type: String,
    required: true,
    // unique: true,
  },
  selectedPost: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Comment", commentSchema);
