import CareerForm from "../components/CareerForm";
import "../styles/CareerAdvisor.css";

function CareerAdvisor() {
  return (
    <div className="career-page">
      <h1>Career Advisor</h1>

      <p>
        Tell us about yourself to receive AI-powered career guidance.
      </p>

      <CareerForm />
    </div>
  );
}

export default CareerAdvisor;