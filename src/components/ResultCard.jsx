import "../styles/ResultCard.css";

function ResultCard({ data, aiResponse }) {
  if (!data) return null;

  return (
    <div className="result-card">
      <div className="result-header">
        <h2>AI Career Guidance</h2>
        <span className="user-badge">{data.name}</span>
      </div>

      <div className="result-body">
        {/* Render the plain text or markdown response from Gemini */}
        <div className="ai-content" style={{ whiteSpace: "pre-line", textAlign: "left" }}>
          {aiResponse}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;