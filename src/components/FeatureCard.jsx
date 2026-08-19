function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={icon} alt={title || "Feature icon"} className="feature-icon" />
    </div>
  );
}

export default FeatureCard;