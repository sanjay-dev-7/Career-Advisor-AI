import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareerForm from "../components/CareerForm";
import ResultCard from "../components/ResultCard";
import { generateCareerAdvice } from "../services/geminiService";
import "../styles/CareerAdvisor.css";

function CareerAdvisor() {
  const [userData, setUserData] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (data) => {
    setUserData(data);
    setLoading(true);
    setError("");
    setAiResponse("");

    try {
      // Call Gemini service function
      const result = await generateCareerAdvice(data);
      setAiResponse(result);
    } catch (err) {
      console.error(err);
      setError("Failed to generate career advice. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="career-page">
        <header className="career-header">
          <span className="badge">✨ Powered by AI</span>
          <h1>Personalized Career Advisor</h1>
          <p>
            Share your skills and career aspirations to receive custom AI-driven guidance, skill gap insights, and an actionable learning roadmap.
          </p>
        </header>

        {/* Input Form */}
        <CareerForm onFormSubmit={handleFormSubmit} />

        {/* Loading Indicator */}
        {loading && (
          <div className="loading-state" style={{ margin: "30px 0", fontStyle: "italic", color: "#2563eb" }}>
            🤖 AI is analyzing your career profile... Please wait!
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="error-message" style={{ margin: "20px 0", color: "#dc2626" }}>
            {error}
          </div>
        )}

        {/* Render ResultCard with AI response once available */}
        {!loading && aiResponse && (
          <ResultCard data={userData} aiResponse={aiResponse} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default CareerAdvisor;