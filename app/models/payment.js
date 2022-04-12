const ModelSchema = require("./index");

const Payment = new ModelSchema("payments").createModel({});

module.exports = Payment;
