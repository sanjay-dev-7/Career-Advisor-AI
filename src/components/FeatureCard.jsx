function FeatureCard(props) {
  return (
    <div className="feature-card">
      <h2>{props.icon}</h2>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default FeatureCard;