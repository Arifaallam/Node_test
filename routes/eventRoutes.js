const express = require("express");
const router = express.Router();
const { createEvent, getEvents } = require("../controllers/eventController");
const auth = require("../middleware/auth")
const roleCheck = require("../middleware/role");

// Create event → only admin can do this
router.post("/events", auth , roleCheck, createEvent);

// Get all events → public
router.get("/events", getEvents);

module.exports = router;

