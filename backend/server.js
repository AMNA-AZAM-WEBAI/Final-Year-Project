// import dotenv from "dotenv";
// dotenv.config();
// import cors from "cors";
// import express from "express";
// import pronunciation from "./routes/pronunciation.js";



// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.use("/api/pronunciation", pronunciation);

// app.get("/", (req, res) => {
//   res.send("Backend is running!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import pronunciation from "./routes/pronunciation.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/pronunciation", pronunciation);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});