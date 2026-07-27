import { useState } from "react";
import "../styles/CareerForm.css";

function CareerForm({ onFormSubmit }) {
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
    e.preventDefault(); // Stop page reload

    // Basic validation check
    if (!formData.name || !formData.skills) {
      alert("Please fill in at least your name and skills!");
      return;
    }

   
    if (onFormSubmit) {
      onFormSubmit(formData);
    }
  };

  return (
    <form className="career-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="e.g. Alex Johnson"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="education">Education / Background</label>
        <input
          id="education"
          type="text"
          name="education"
          placeholder="e.g. B.Tech in Computer Science, Self-Taught"
          value={formData.education}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="skills">Technical & Soft Skills</label>
        <input
          id="skills"
          type="text"
          name="skills"
          placeholder="e.g. React, JavaScript, Python, Communication"
          value={formData.skills}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="interests">Interests & Tech Domain</label>
        <input
          id="interests"
          type="text"
          name="interests"
          placeholder="e.g. AI/ML, Frontend Engineering, Mobile Apps"
          value={formData.interests}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="goals">Career Goals & Aspirations</label>
        <textarea
          id="goals"
          name="goals"
          placeholder="Describe your target job role or what you want to achieve..."
          rows="4"
          value={formData.goals}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Analyze My Career
      </button>
    </form>
  );
}

export default CareerForm;