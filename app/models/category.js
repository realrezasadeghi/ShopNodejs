const ModelSchema = require("./index");

const Category = new ModelSchema("categories").createModel({});

module.exports = Category;
