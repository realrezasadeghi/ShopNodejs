const ModelSchema = require("./index");

const Products = new ModelSchema("products").createModel({
  title: { type: String, required: true },
  shortDesc: { type: String, required: true },
  totalDesc: { type: String, required: true },
  images: { type: [String], required: true },
  tags: { type: [String], default: [] },
  category: { type: mongoose.Types.ObjectId, required: true },
  comments: { type: [], default: [] },
  like: { type: [mongoose.Types.ObjectId], default: [] },
  deslike: { type: [mongoose.Types.ObjectId], default: [] },
  bookmark: { type: [mongoose.Types.ObjectId], default: [] },
  price: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  count: { type: Number },
  type: { type: String, required: true },
  time: { type: String },
  format: { type: String },
  teacher: { type: mongoose.Types.ObjectId, required: true },
  feture: {
    type: Object,
    default: {
      length: "",
      height: "",
      width: "",
      weight: "",
      colors: [],
      model: [],
      madein: "",
    },
  },
});

module.exports = Products;
