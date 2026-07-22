import "../styles/CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">

      <h2>Ready to Discover Your Career?</h2>

      <p>
        Let AI analyze your skills and guide you toward the perfect career path.
      </p>

      <Link to="/career-advisor" className="cta-btn">
          Analyze My Career
      </Link>

    </section>
  );
}

export default CTA;