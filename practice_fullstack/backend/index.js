//packages/modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// connect to db
mongoose
  .connect("mongodb://localhost/Practice")
  .then(() => console.log("connected to DB!"))
  .catch(() => console.log("ERROR connected to DB"));

//Middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/test",require("./routes/project"));

//LISTENING/Start the Server
app.listen(5000, () => {
  console.log("Server Running!");
});
