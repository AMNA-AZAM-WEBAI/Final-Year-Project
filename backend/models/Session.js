import mongoose from "mongoose";

// const sessionSchema = new mongoose.Schema({
//   userId: {
//     type: String,
//     required: true
//   },
//   recitedText: {
//     type: String,
//     required: true
//   },
//   expectedText: {
//     type: String,
//     required: true
//   },
//   accuracy: {
//     type: Number,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });
const SessionSchema = new mongoose.Schema({
  userId: String,
  recitedText: String,
  expectedText: String,
  accuracy: Number,
  surah: String,
  ayah: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;