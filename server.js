require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const workoutRoutes = require("./routes/workouts");
//express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
//[MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose7 errors in nodejs.

// mongoose.set("strictQuery", false);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(" connected to db && Listening on port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
