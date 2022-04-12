const ModelSchema = require("./index");

const User = new ModelSchema("users").createModel({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true },
  username: { type: String, required: true, lowercase: true },
  mobile: { type: String, required: true },
  otp: {
    type: Object,
    default: {
      code: 0,
      expires: 0,
    },
  },
  bills: { type: [], default: [] },
  discount: { type: Number, default: [] },
  birthday: { type: String },
  rols: { type: [String], default: [] },
});

module.exports = User;
