import FeatureCard from "./FeatureCard";
import "../styles/Features.css";

function Features() 
     
   {
  const featuresData = [
    {
      
      title: "AI Career Advisor",
      icon:"https://www.svgrepo.com/show/509628/cog1.svg",
      description: "Receive personalized career paths based on your current skills, background, and aspirations.",
    },
    {
      icon: "https://www.svgrepo.com/show/262847/curriculum-vitae-resume.svg",
      title: "Resume Analyzer",
      description: "Get instant feedback on your resume and actionable tips to pass ATS screening filters.",
    },
    {
      icon: "https://www.svgrepo.com/show/452092/react.svg",
      title: "Skill Gap Analysis",
      description: "Identify key industry technologies you're missing for your target engineering roles.",
    },
    {
      icon: "https://www.svgrepo.com/show/489906/road-sign.svg",
      title: "Learning Roadmap",
      description: "Follow a step-by-step, structured roadmap designed to get you job-ready faster.",
    },
  ];

  return (
    <div class="container">
  <div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>
  <div>
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
            title={feature.title}
            icon={feature.icon}
           
            description={feature.description}
          />
        ))}
      </div>
    </section>
  </div>
</div>

    
  );
}

export default Features;