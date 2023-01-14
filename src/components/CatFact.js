import React, { useState, useEFfect, useEffect } from "react";
import axios from "axios";

const CatFact = () => {
  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
};

export default CatFact;
