import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    // later you can add navigation to products page
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for healthy and beautiful plants</p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
