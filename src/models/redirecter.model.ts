import { Schema, model } from "mongoose";

const redirecterSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    minlength: 10,
    maxlength: 10,
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