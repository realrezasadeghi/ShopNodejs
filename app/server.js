const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const morgan = require("morgan");
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
    this.#app.use(morgan())
    this.#app.use(express.json());
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }

  connectToDatabase() {
    mongoose.connect(`mongodb://localhost:27017/${this.#DbName}`, (err) => {
      if (!err) return console.log(`Connect To Database -> ${this.#DbName}`);
      return console.log("Error Connect To Database", err);
    });

    mongoose.connection.on("connected", () => {
      console.log("mongoose Connect To Db");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("mongoose disConnect To Db");
    });
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("disconnect");
      process.exit(0);
    });
  }

  createServer() {
    const http = require("http");
    const server = http.createServer(this.#app);
    server.listen(this.#Port, () => {
      console.log(`Server runing on port -> localhost:${this.#Port}`);
    });
  }

  createRoutes() {
    this.#app.use(routes);
  }

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
