import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Welcome() {
  const navigate = useNavigate();
  const handleGoToAddItem = () => {
    navigate("/item");
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">WELCOME</h1>
      <button className="navigate-button" onClick={handleGoToAddItem}>
        <ArrowForwardIcon style={{ fontSize: 40 }} />
      </button>
    </div>
  );
}

export default Welcome;
