import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">✨ AI-Powered Career Planning</span>

        <h1 className="hero-title">
          Navigate Your Tech Career with <span>CareerPilot AI</span>
        </h1>

        <p className="hero-subtitle">
          Discover high-demand career paths, analyze your skill gaps, and get a personalized learning roadmap tailored to your tech goals.
        </p>

        <div className="hero-cta-group">
          <Link to="/career-advisor" className="hero-btn primary-btn">
            Get Started Free →
          </Link>
          <a href="#features" className="hero-btn secondary-btn">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;