import ReactMarkdown from "react-markdown";
import "../styles/ResultCard.css";

function ResultCard({ data, aiResponse }) {
  if (!data) return null;

  return (
    <div className="dashboard-container">
      {/* Top Header Banner */}
      <div className="dashboard-hero">
        <span className="hero-badge">⚡ AI Roadmap</span>
        <h1>Career Analysis Dashboard</h1>
        <p>Targeted career advice for <strong>{data.name}</strong></p>
      </div>

      {/* Main Content Area */}
      <div className="dashboard-body">
        {aiResponse ? (
          <ReactMarkdown>{aiResponse}</ReactMarkdown>
        ) : (
          <p className="placeholder-text">No analysis generated yet.</p>
        )}
      </div>
    </div>
  );
}

export default ResultCard;