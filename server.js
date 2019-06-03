const express = require("express");
const mongoose = require("mongoose");
const credentials = require("./credentials");
const routeLogin = require("./api/routes/Login");
const routeResult = require("./api/routes/Result");
const routeSave = require("./api/routes/Save");
const routeDelete = require("./api/routes/Delete");

/* ----- Database ----- */
const dbUrl = `mongodb://${credentials.username}:${credentials.password}@${
  credentials.server
}:${credentials.port}/arduino`;
mongoose.connect(dbUrl, {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

/* ----- Website / API ----- */
const app = express();

app.use(express.json());

app.use("/", express.static("dashboard"));

app.use("/api", routeLogin);
app.use("/api", routeResult);
app.use("/api", routeSave);
app.use("/api", routeDelete);

const port = 3000;

app.listen(port, () =>
  console.log("\x1b[44m\x1b[37m%s\x1b[0m", ` Server started on port: ${port} `)
);
