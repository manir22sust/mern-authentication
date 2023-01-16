const express = require("express");

const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controlers/workoutControler");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
// require auth for all workout routes
router.use(requireAuth);

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
