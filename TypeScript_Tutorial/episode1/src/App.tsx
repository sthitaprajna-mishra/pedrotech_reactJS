import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro12@pedrotech.com"
        age={21}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
