const mongoose = require("mongoose");
const ModelSchema = require("./index");

const Blog = new ModelSchema("blogs").createModel({
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  comments: {
    type: [],
    default: [],
  },
  like: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
  dislike: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
  bookmark: {
    type: [mongoose.Types.ObjectId],
    default: [],
  },
});

module.exports = Blog;
