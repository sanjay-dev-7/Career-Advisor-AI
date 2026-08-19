import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareerForm from "../components/CareerForm";
import ResultCard from "../components/ResultCard";
import OrbitLoader from "../components/OrbitLoader";
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
      setError("Mission Control Alert: Unable to plot trajectory. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar isHomePage={true} />

      <div className="econtainer">
        <div className="career-page">
          <header className="career-header">
            <h1>🚀 CareerPilot AI Mission Control</h1>
            <p>
              Share your skills and career aspirations to receive custom AI-driven guidance, skill gap insights, and an actionable learning roadmap.
            </p>
          </header>

          {/* Input Form with loading state */}
          <CareerForm onFormSubmit={handleFormSubmit} loading={loading} />

          {/* Glowing Orbit Radar Loader */}
          {loading && (
            <OrbitLoader message="CALCULATING ORBITAL TRAJECTORY & SKILL MAPPING..." />
          )}

          {/* Error Message */}
          {error && (
            <div
              className="error-message"
              style={{
                margin: "20px 0",
                color: "#f87171",
                fontFamily: "monospace",
                textAlign: "center",
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* Render ResultCard with AI response once available */}
          {!loading && aiResponse && (
            <ResultCard data={userData} aiResponse={aiResponse} />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CareerAdvisor;