  import { useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
  import "../styles/Demo.css";

  const TajweedPractice = () => {
      const location = useLocation();
    const { moduleTitle, level } = location.state || {};
    const [recording, setRecording] = useState(false);
     const [recitedText, setRecitedText] = useState("");
    const [feedback, setFeedback] = useState([
      { type: "bot", message: "Are you ready? Click the microphone to start reciting." },
    ]);

    const handleMicClick = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.lang = "ar-SA";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setRecording(true);
      setFeedback((prev) => [
        ...prev,
        { type: "bot", message: "🎧 AI is listening..." },
      ]);
    };

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setRecitedText(transcript);

      const expectedText = "قُلْ هُوَ اللَّهُ أَحَدٌ";

      const accuracy = calculateAccuracy(expectedText, transcript);

      setFeedback((prev) => [
        ...prev,
        { type: "user", message: transcript },
        {
          type: "bot",
          message: accuracy === 100
            ? "Excellent pronunciation!"
            : "Good attempt. Try to pronounce the words more clearly.",
        },
      ]);

      await fetch("http://localhost:5000/api/pronunciation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "demoUser",
          recitedText: transcript,
          expectedText: expectedText,
          accuracy: accuracy,
        }),
      });
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };

    recognition.onend = () => {
      setRecording(false);
    };

    recognition.start();
  };

  const normalizeArabic = (text) => {
  return text
    .replace(/[ًٌٍَُِّْ]/g, "") // remove harakat
    .replace(/ٱ/g, "ا")
    .replace(/أ|إ|آ/g, "ا")
    .replace(/ة/g, "ه")
    .trim();
};

const calculateAccuracy = (expected, recited) => {
  const normalizeArabic = (text) => {
    return text
      .replace(/[ًٌٍَُِّْ]/g, "")
      .replace(/ٱ/g, "ا")
      .replace(/أ|إ|آ/g, "ا")
      .replace(/ة/g, "ه")
      .trim();
  };

  const expectedWords = normalizeArabic(expected).split(" ");
  const recitedWords = normalizeArabic(recited).split(" ");

  let correct = 0;

  expectedWords.forEach((word, index) => {
    if (recitedWords[index] === word) {
      correct++;
    }
  });

  const accuracy = Math.round((correct / expectedWords.length) * 100);

  return accuracy;
};

const highlightMistakes = (expected, recited) => {
  const expectedWords = normalizeArabic(expected).split(" ");
  const recitedWords = normalizeArabic(recited).split(" ");

  return expectedWords.map((word, index) => {
    if (recitedWords[index] === word) {
      return (
        <span key={index} style={{ color: "black", marginRight: "6px" }}>
          {word}
        </span>
      );
    } else {
      return (
        <span key={index} style={{ color: "red", marginRight: "6px" }}>
          {word}
        </span>
      );
    }
  });
};
    return (
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar */}
        <aside className="demo-sidebar">
          <div className="logo">Tajweed AI</div>
          <nav>
           <nav>
  <Link to="/demo">Current Lesson</Link>
  <Link to="/history">Verse History</Link>
  <Link to="/saved-feedback">Saved Feedback</Link>
  <Link to="/progress">Progress</Link>
  <Link to="/settings">Settings</Link>
</nav>
          </nav>
        </aside>

        {/* Main */}
        <main style={{ flex: 1, padding: "32px" }}>
          {/* Header */}
    <header className="demo-header">
    <h3>
      Course / Tajweed Fundamentals /{" "}
      <span style={{ color: "#0f766e" }}>{moduleTitle}</span>
    </h3>
    <p style={{ color: "#475569", fontSize: "14px" }}>Level: {level}</p>
    <div>AI Tutor Active</div>
  </header>


          {/* Recitation & Feedback */}
          <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
            {/* Recitation */}
            <div className="recitation-area" style={{ flex: 1 }}>
              <span className="verse-tag">SURAH AL-IKHLAS • VERSE 1</span>
              <h1>
  {recitedText
    ? highlightMistakes("قُلْ هُوَ اللَّهُ أَحَدٌ", recitedText)
    : "قُلْ هُوَ اللَّهُ أَحَدٌ"}
</h1>

              <button className="mic-button" onClick={handleMicClick}>
                {recording ? "⏹ Stop" : "🎤"}
              </button>
            </div>

            {/* Feedback */}
            <div className="live-feedback" style={{ flex: 1 }}>
              {feedback.map((f, i) => (
                <div
                  key={i}
                  className={f.type === "bot" ? "feedback-bot" : "feedback-user"}
                >
                  <div className="icon">{f.type === "bot" ? "🤖" : "🧑"}</div>
                  <div className="message">{f.message}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
    );
  };

  export default TajweedPractice;
