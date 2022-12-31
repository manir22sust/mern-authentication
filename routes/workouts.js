const express = require("express");

const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controlers/workoutControler");
const Workout = require("../models/workoutModel");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// POST a new workout
router.delete("/:id", deleteWorkout);

// UPDATE a new workout
router.patch("/", updateWorkout);

module.exports = router;
