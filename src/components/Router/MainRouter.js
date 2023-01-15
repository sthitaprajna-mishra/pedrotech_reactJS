import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Profile from "./Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainRouter = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </div>
  );
};

export default MainRouter;
