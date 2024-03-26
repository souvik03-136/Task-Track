require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes");
const port = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(process.env.DATABASE + "/" + process.env.DATABASE_NAME)
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log("Listening to port ", port);
    });
  })
  .catch((error) => {
    console.log("Database connection failed");
    console.error(error);
  });

app.use("/", router);
