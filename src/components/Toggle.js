import React from "react";
import useToggle from "./useToggle";

const Toggle = () => {
  const [isVisible, setIsVisible] = useToggle();
  return (
    <div>
      <button onClick={setIsVisible}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden text</h1>}
    </div>
  );
};

export default Toggle;
