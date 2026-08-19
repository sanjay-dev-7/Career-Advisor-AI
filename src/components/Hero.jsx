import { Link } from "react-router-dom";
import "../styles/Hero.css";

function Hero() {
  return (
    <div class="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div>
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
            Get Started →
          </Link>
          <a  href="#features" className="hero-btn secondary-btn">
           <span>Explore</span> 
          </a>
     

          
        </div>
      </div>
    </section>
      </div>
    </div>

    
  );
}

export default Hero;