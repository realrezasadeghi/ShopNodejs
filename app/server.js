const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

class App {
  #app = express();
  #DbName;
  #Port;
  constructor(DbName, Port) {
    this.#DbName = DbName;
    this.#Port = Port;

    // methods
    this.configApplication();
    this.createServer();
    this.connectToDatabase();
    this.createRoutes();
    this.errorHandler();
  }
  configApplication() {
    this.#app.use(express.urlencoded());
    this.#app.use(express.json());
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }

  connectToDatabase() {
    mongoose.connect(`mongodb://localhost:27017/${this.#DbName}`, (err) => {
      if (!err) console.log(`Connect To Database ${this.#DbName}`);
      return console.log("Disconnect To Database", err);
    });
  }

  createServer() {
    const http = require("http");
    http.createServer(this.#app).listen(this.#Port, () => {
      console.log(`Server Runing On Port -> localhost:${this.#Port}`);
    });
  }

  createRoutes() {}

  errorHandler() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        status: 404,
        message: "صفحه مورد نظر یافت نشد",
      });
    });
    this.#app.use((error, req, res, next) => {
      const statusCode = error.code || 500;
      const message = error.message || "Internal Server";
      return res.status(statusCode).json({
        statusCode,
        message,
      });
    });
  }
}

module.exports = App;
