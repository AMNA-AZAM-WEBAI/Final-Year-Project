import React from "react";

// Dynamic list of 114 Surahs
const surahs = Array.from({ length: 114 }, (_, i) => `Surah ${i + 1}`);

const SurahList = () => {
  return (
    <div style={{ padding: "32px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>Surah List</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
        {surahs.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "12px",
              border: "1px solid #0f766e",
              borderRadius: "8px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#ccfbf1",
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahList;
