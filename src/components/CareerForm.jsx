import "../styles/CareerForm.css";

function CareerForm() {
  return (
    <form className="career-form">

      <input
        type="text"
        placeholder="Enter your name"
      />

      <input
        type="text"
        placeholder="Education (B.E, B.Tech, MBA...)"
      />

      <input
        type="text"
        placeholder="Skills (React, Java, Python...)"
      />

      <input
        type="text"
        placeholder="Interests (AI, Web Development...)"
      />

      <textarea
        placeholder="Describe your career goals..."
        rows="5"
      ></textarea>

      <button type="submit">
        Analyze My Career
      </button>

    </form>
  );
}

export default CareerForm;