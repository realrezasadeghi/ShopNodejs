const ModelSchema = require("./index");

const Slider = new ModelSchema("sliders").createModel({
  title: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "main",
  },
});

module.exports = Slider;
