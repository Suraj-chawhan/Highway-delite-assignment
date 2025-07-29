import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = ({user,setUser}) => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to NoteVault {user?.name}</h1>
        <p className="welcome-subtitle">
          Your secure and beautiful place to store all your thoughts.
        </p>
        <button className="welcome-button" onClick={() => navigate("/")}>
          Create Note
        </button>
      </div>
    </div>
  );
};

export default Welcome;
