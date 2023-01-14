import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Profile from "./Profile";

const MainRouter = () => {
  return (
    <div>
      <Router>
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/profile"> Profile </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainRouter;
