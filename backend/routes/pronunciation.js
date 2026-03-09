// import express from "express";
// import multer from "multer";
// import { handlePronunciation } from "../controllers/pronunciationController.js";
// import Session from "../models/Session.js";

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// router.post("/", upload.single("audio"), handlePronunciation);

// export default router;
import express from 'express';
import Session from '../models/Session.js';
import multer from "multer";
import { handlePronunciation } from "../controllers/pronunciationController.js";

const router = express.Router();

// Route to handle pronunciation session creation
router.post('/', async (req, res) => {
  try {
    const { userId, recitedText, expectedText, accuracy } = req.body;
    
    // Validate that all required fields are present
    if (!userId || !recitedText || !expectedText || accuracy == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new session
    const newSession = new Session({
      userId,
      recitedText,
      expectedText,
      accuracy,
    });

    // Save to the database
    await newSession.save();

    // Respond back to the client
    res.json({
      message: 'Session saved successfully!',
      session: newSession
    });
  } catch (error) {
    console.error('Error saving session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// router.get("/history", async (req, res) => {
//   try {
//     const sessions = await Session.find().sort({ createdAt: -1 });
//     res.json(sessions);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch history" });
//   }
// });
// Get all recitation sessions
router.get("/", async (req, res) => {
  try {
    const sessions = await Session.find().sort({ createdAt: -1 });
    res.json(sessions);
  } catch (error) {
    console.error("Error fetching sessions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Session.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete session" });
  }
});

export default router;
