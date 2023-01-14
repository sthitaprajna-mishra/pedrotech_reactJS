import Axios from "axios";
import React, { useState } from "react";

const Excuser = () => {
  const [excuse, setExcuse] = useState("");
  const URL = "https://excuser-three.vercel.app/v1/excuse/";
  const EXCUSE_TYPES = {
    PARTY: "party",
    FAMILY: "family",
    OFFICE: "office",
  };
  const fetchExcuse = (type) => {
    Axios.get(`${URL}${type}`).then((res) => setExcuse(res.data[0].excuse));
  };

  return (
    <div>
      <h2>Generate an Excuse</h2>
      <button
        value={EXCUSE_TYPES.PARTY}
        onClick={(e) => fetchExcuse(e.target.value)}
      >
        Party
      </button>
      <button
        value={EXCUSE_TYPES.FAMILY}
        onClick={(e) => fetchExcuse(e.target.value)}
      >
        Family
      </button>
      <button
        value={EXCUSE_TYPES.OFFICE}
        onClick={(e) => fetchExcuse(e.target.value)}
      >
        Office
      </button>
      <h3>{excuse}</h3>
    </div>
  );
};

export default Excuser;
