import mongoose from "mongoose";

import { Schema } from "mongoose";

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Category", categorySchema);
