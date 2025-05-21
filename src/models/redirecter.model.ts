import { Schema, model } from "mongoose";

const redirecterSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const RedirecterModel = model("Redirecter", redirecterSchema);

export default RedirecterModel;