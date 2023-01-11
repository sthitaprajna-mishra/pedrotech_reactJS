import "./App.css";
import User from "./User";

function App() {
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lucas"];

  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 51 },
    { name: "Jessica", age: 45 },
  ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div className="App">
      {users.map((e, key) => (
        <User myKey={key} key={key} name={e.name} age={e.age} />
      ))}

      {planets
        .filter((e) => e.isGasPlanet)
        .map((e, key) => (
          <h2 key={key}>{e.name}</h2>
        ))}
    </div>
  );
}

export default App;
