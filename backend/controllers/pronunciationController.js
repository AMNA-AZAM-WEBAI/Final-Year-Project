// import { transcribeAudio } from "../services/whisperService.js";
// export const handlePronunciation = (req, res) => {
//   console.log("🚀 handlePronunciation called");
//   console.log("req.file:", req.file);
//   console.log("req.body:", req.body);

//   if (!req.file) return res.status(400).json({ error: "No file uploaded" });

//   res.json({
//     message: "File received",
//     fileName: req.file.originalname,
//     expectedText: req.body.expectedText || "",
//   });
// };

import OpenAI from "openai";
import fs from "fs";

export const handlePronunciation = async (req, res) => {
  try {

    // ✅ WRITE IT HERE
    console.log("API KEY:", process.env.OPENAI_API_KEY);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    if (!req.file) {
      return res.status(400).json({ error: "No audio file uploaded" });
    }

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(req.file.path),
      model: "gpt-4o-mini-transcribe",
    });

    res.json({
      transcription: transcription.text,
    });

  } catch (error) {
    console.error("FULL ERROR:", error);
    res.status(500).json({
      error: "Pronunciation processing failed",
      details: error.message,
    });
  }
};





// export const handlePronunciation = async (req, res) => {
//   try {
//     const expectedText = req.body.expectedText;
//     const filePath = req.file.path;

//     const spokenText = await transcribeAudio(filePath);

//     // Basic comparison
//     const result = compareText(expectedText, spokenText);

//     res.json({
//       transcript: spokenText,
//       feedback: result
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Pronunciation processing failed" });
//   }
// };

// function compareText(expected, spoken) {
//   if (expected === spoken) return { score: 100, mistakes: [] };

//   const expectedWords = expected.split(" ");
//   const spokenWords = spoken.split(" ");

//   let correct = 0;
//   let mistakes = [];

//   expectedWords.forEach((word, index) => {
//     if (word === spokenWords[index]) {
//       correct++;
//     } else {
//       mistakes.push({
//         expected: word,
//         spoken: spokenWords[index] || "missing"
//       });
//     }
//   });

//   return {
//     score: Math.round((correct / expectedWords.length) * 100),
//     mistakes
//   };
// }
