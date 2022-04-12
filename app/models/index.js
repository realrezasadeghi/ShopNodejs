const { Schema, model } = require("mongoose");

class ModelDatabase {
  #nameDocument;
  constructor(nameDocument) {
    this.#nameDocument = nameDocument;
  }

  createModel(option) {
    const schema = new Schema({ ...option });
    const modelSchema = model(this.#nameDocument, schema);
    return modelSchema;
  }
}

module.exports = ModelDatabase;
