import FeatureCard from "./FeatureCard";
import "../styles/Features.css";

function Features() {
  return (
    <section className="features">
      <h1>Why Choose CareerPilot AI?</h1>

      <div className="feature-container">
        <FeatureCard
          icon="🤖"
          title="AI Career Advisor"
          description="Get career suggestions based on your skills."
        />

        <FeatureCard
          icon="📄"
          title="Resume Analyzer"
          description="Improve your resume using AI."
        />

        <FeatureCard
          icon="📈"
          title="Skill Gap Analysis"
          description="Find the skills you need to learn."
        />

        <FeatureCard
          icon="🛣️"
          title="Learning Roadmap"
          description="Receive a step-by-step learning plan."
        />
      </div>
    </section>
  );
}

export default Features;