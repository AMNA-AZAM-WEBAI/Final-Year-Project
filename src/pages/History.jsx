import { useEffect, useState } from "react";

const History = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pronunciation")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setSessions(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteSession = async (id) => {
  await fetch(`http://localhost:5000/api/pronunciation/${id}`, {
    method: "DELETE",
  });

  setHistory(history.filter((item) => item._id !== id));
};

const averageAccuracy =
  history.length > 0
    ? (
        history.reduce((acc, item) => acc + item.accuracy, 0) /
        history.length
      ).toFixed(2)
    : 0;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Recitation History</h2>

      {sessions.length === 0 ? (
        <p>No recitation history yet.</p>
      ) : (
        sessions.map((session) => (
          <div
            key={session._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginTop: "10px",
              borderRadius: "8px",
            }}
          >
            {/* <p><strong>Recited:</strong> {session.recitedText}</p>
            <p><strong>Expected:</strong> {session.expectedText}</p>
            <p><strong>Accuracy:</strong> {session.accuracy}%</p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(session.createdAt).toLocaleString()}
            </p> */}
            {history.map((item) => (
  <div key={item._id} className="history-card">
    <p><strong>Recited:</strong> {item.recitedText}</p>
    <p><strong>Expected:</strong> {item.expectedText}</p>
    <p>
  <strong>Accuracy:</strong>{" "}
  <span
    style={{
      color:
        item.accuracy > 80
          ? "green"
          : item.accuracy > 50
          ? "orange"
          : "red",
    }}
  >
    {item.accuracy}%
  </span>
</p>
    <p><strong>Date:</strong> {new Date(item.createdAt).toLocaleString()}</p>
  </div>
))}
          </div>
        ))
      )}
      <button onClick={() => deleteSession(item._id)}>
  Delete
</button>
    </div>
  );
};

export default History;