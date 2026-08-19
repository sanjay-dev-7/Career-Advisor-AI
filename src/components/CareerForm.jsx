import { useState } from "react";
import "../styles/CareerForm.css";

function CareerForm({ onFormSubmit, loading }) {
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    skills: "",
    interests: "",
    goals: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.skills.trim()) {
      alert("Please fill in at least your name and skills!");
      return;
    }

    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <form className="form career-pilot-form" onSubmit={handleSubmit}>
      {/* Top Banner Area */}
      <div id="login-area">
        <p>CAREER PILOT</p>
        <p id="behind">Fill the Form</p>
      </div>

      {/* Full Name */}
      <div id="email-area" className="form-input-box">
        <input
          id="name"
          name="name"
          className="input"
          type="text"
          placeholder="FULL NAME"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      {/* Education / Background */}
      <div className="form-input-box">
        <input
          id="education"
          name="education"
          className="input"
          type="text"
          placeholder="EDUCATION / BACKGROUND"
          value={formData.education}
          onChange={handleChange}
        />
      </div>

      {/* Skills */}
      <div className="form-input-box">
        <input
          id="skills"
          name="skills"
          className="input"
          type="text"
          placeholder="TECHNICAL & SOFT SKILLS"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>

      {/* Interests */}
      <div className="form-input-box">
        <input
          id="interests"
          name="interests"
          className="input"
          type="text"
          placeholder="TECH DOMAIN / INTERESTS"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>

      {/* Career Goals */}
      <div id="password-area" className="form-input-box textarea-box">
        <textarea
          id="goals"
          name="goals"
          className="input textarea-field"
          placeholder="CAREER GOALS & TARGET ROLES"
          rows="3"
          value={formData.goals}
          onChange={handleChange}
        />
      </div>

      {/* Footer Area with Submit Button */}
      <div id="footer-area">
        <button type="submit" disabled={loading}>
          {loading ? "CALCULATING ...." : "ANALYZE CAREER "}
        </button>
        <div id="text-inside">
          <p> AI Engine:</p>
          <span id="link">ONLINE</span>
        </div>
      </div>

      {/* Template Decorative Layers */}
      <div id="background-color"></div>
      <div id="whitefilter"></div>
    </form>
  );
}

export default CareerForm;