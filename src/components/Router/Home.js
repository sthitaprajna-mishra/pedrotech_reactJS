import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/contact")}>
        Change to contact page
      </button>
    </div>
  );
};

export default Home;
