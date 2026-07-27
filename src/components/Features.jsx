import FeatureCard from "./FeatureCard";
import "../styles/Features.css";

function Features() {
  const featuresData = [
    {
      icon: "🤖",
      title: "AI Career Advisor",
      description: "Receive personalized career paths based on your current skills, background, and aspirations.",
    },
    {
      icon: "📄",
      title: "Resume Analyzer",
      description: "Get instant feedback on your resume and actionable tips to pass ATS screening filters.",
    },
    {
      icon: "📈",
      title: "Skill Gap Analysis",
      description: "Identify key industry technologies you're missing for your target engineering roles.",
    },
    {
      icon: "🛣️",
      title: "Learning Roadmap",
      description: "Follow a step-by-step, structured roadmap designed to get you job-ready faster.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-header">
        <span className="badge">Why CareerPilot AI?</span>
        <h2>Everything You Need to Scale Your Tech Career</h2>
        <p>Smart tools designed to guide you from learning to getting hired.</p>
      </div>

      <div className="feature-container">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;