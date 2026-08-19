import React from "react";
import "../styles/OrbitLoader.css";

function OrbitLoader({ message = "CALCULATING ORBITAL TRAJECTORY..." }) {
  return (
    <div className="orbit-loader-wrapper">
      <div className="orbit-loader-stage">
        <div aria-live="assertive" role="alert" className="loader"></div>
      </div>
      <div className="orbit-status-text">🛰️ {message}</div>
    </div>
  );
}

export default OrbitLoader;