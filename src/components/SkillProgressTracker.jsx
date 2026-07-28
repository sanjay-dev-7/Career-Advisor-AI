import React, { useState, useEffect } from "react";
import "../styles/SkillProgressTracker.css";

function SkillProgressTracker({ targetRole = "", initialSkills = "" }) {
  // Utility: Parse comma-separated string to clean array
  const parseSkills = (str) =>
    str ? str.split(",").map((s) => s.trim()).filter(Boolean) : [];

  const userSkills = parseSkills(initialSkills);
  const mainRole = targetRole.trim() || "Target Role";

  // State for active detected skills from user input
  const [selectedSkills, setSelectedSkills] = useState(userSkills);

  // Dynamic state mapping roles to their required benchmark skills
  // Built directly from the role and skills provided in the form!
  const [roleSkillMap, setRoleSkillMap] = useState(() => ({
    [mainRole]: userSkills.length > 0 ? userSkills : ["Core Competency", "Domain Skills"],
  }));

  // Track active progress bar cards
  const [activeRoles, setActiveRoles] = useState([mainRole]);

  // Input state for dynamically adding ANY custom role bar
  const [customRoleInput, setCustomRoleInput] = useState("");
  const [customSkillInput, setCustomSkillInput] = useState("");

  // Update whenever user submits a new form input
  useEffect(() => {
    const freshSkills = parseSkills(initialSkills);
    const freshRole = targetRole.trim() || "Target Role";

    setRoleSkillMap((prev) => ({
      ...prev,
      [freshRole]: freshSkills.length > 0 ? freshSkills : ["Core Competency", "Domain Skills"],
    }));

    setActiveRoles([freshRole]);
    setSelectedSkills(freshSkills);
  }, [targetRole, initialSkills]);

  // Manually add ANY new custom role progress bar
  const handleAddCustomRole = (e) => {
    e.preventDefault();
    const newRole = customRoleInput.trim();
    if (!newRole) return;

    const newSkills = parseSkills(customSkillInput);

    setRoleSkillMap((prev) => ({
      ...prev,
      [newRole]: newSkills.length > 0 ? newSkills : selectedSkills,
    }));

    if (!activeRoles.includes(newRole)) {
      setActiveRoles((prev) => [...prev, newRole]);
    }

    setCustomRoleInput("");
    setCustomSkillInput("");
  };

  // Remove progress bar card
  const handleRemoveTracker = (roleToRemove) => {
    if (activeRoles.length === 1) {
      alert("You must keep at least one progress bar active!");
      return;
    }
    setActiveRoles((prev) => prev.filter((r) => r !== roleToRemove));
  };

  // Skill click toggle handlers
  const handleToggleSkill = (skill) => {
    if (selectedSkills.some((s) => s.toLowerCase() === skill.toLowerCase())) {
      setSelectedSkills(selectedSkills.filter((s) => s.toLowerCase() !== skill.toLowerCase()));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter((s) => s.toLowerCase() !== skillToRemove.toLowerCase()));
  };

  return (
    <div className="multi-tracker-wrapper">
      {/* Dynamic Add Role Control Panel */}
      <div className="tracker-control-bar">
        <form onSubmit={handleAddCustomRole} className="custom-role-form">
          <label>Add Another Target Role Progress Bar:</label>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="e.g. Chartered Accountant, Embedded Dev, UI Designer..."
              value={customRoleInput}
              onChange={(e) => setCustomRoleInput(e.target.value)}
              className="role-text-input"
            />
            <input
              type="text"
              placeholder="Required skills (comma separated)..."
              value={customSkillInput}
              onChange={(e) => setCustomSkillInput(e.target.value)}
              className="role-text-input skills-input"
            />
            <button type="submit" className="add-bar-btn">
              + Add Progress Bar
            </button>
          </div>
        </form>
      </div>

      {/* Active Detected Skills Matrix */}
      <div className="active-skills-card">
        <label className="section-label">Your Active Skills (Click '×' to remove):</label>
        <div className="skills-chip-group">
          {selectedSkills.length > 0 ? (
            selectedSkills.map((skill, idx) => (
              <span key={idx} className="active-chip">
                {skill}
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  ×
                </button>
              </span>
            ))
          ) : (
            <p className="no-skills-msg">No active skills. Add skills below or in the form!</p>
          )}
        </div>
      </div>

      {/* Dynamic Role Progress Bars */}
      <div className="trackers-grid">
        {activeRoles.map((roleName) => {
          const roleBenchmarkSkills = roleSkillMap[roleName] || [];
          const matchedCount = roleBenchmarkSkills.filter((skill) =>
            selectedSkills.some((s) => s.toLowerCase() === skill.toLowerCase())
          ).length;

          const matchPct =
            roleBenchmarkSkills.length > 0
              ? Math.round((matchedCount / roleBenchmarkSkills.length) * 100)
              : 0;

          return (
            <div key={roleName} className="role-tracker-card">
              <div className="tracker-card-header">
                <div>
                  <span className="role-tag">Target Role</span>
                  <h4>{roleName}</h4>
                </div>
                <div className="header-actions">
                  <span className="match-pill">{matchPct}% Match</span>
                  <button
                    type="button"
                    className="delete-bar-btn"
                    onClick={() => handleRemoveTracker(roleName)}
                  >
                    🗑️ Remove Bar
                  </button>
                </div>
              </div>

              <div className="bar-section">
                <div className="bar-labels">
                  <span>Skill Readiness Alignment</span>
                  <span>
                    {matchedCount} / {roleBenchmarkSkills.length} Required Skills Met
                  </span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${matchPct}%` }}></div>
                </div>
              </div>

              <div className="role-suggestions">
                <span className="sub-label">Benchmark Skills for {roleName}:</span>
                <div className="suggestions-group">
                  {roleBenchmarkSkills.map((skill, idx) => {
                    const isSelected = selectedSkills.some(
                      (s) => s.toLowerCase() === skill.toLowerCase()
                    );
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`suggestion-chip ${isSelected ? "selected" : ""}`}
                        onClick={() => handleToggleSkill(skill)}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillProgressTracker;