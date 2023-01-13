import React, { useState } from "react";

const App = () => {
  const [age, setAge] = useState(0);
  const [userInput, setUserInput] = useState();
  const [toggleText, setToggleText] = useState(true);

  const [count, setCount] = useState(0);

  const handleToggleText = () => {
    setToggleText((prev) => !prev);
  };

  const showText = (e) => {
    setUserInput(e.target.value);
  };

  const increaseAge = () => {
    setAge((prev) => prev + 1);
    console.log(age);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => showText(e)} />
      <p>{userInput}</p>

      <button onClick={handleToggleText}>Show/Hide Text</button>

      {toggleText && <p>HI MY NAME IS PEDRO</p>}

      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Set to Zero</button>

      <p>{count}</p>
    </div>
  );
};

export default App;
