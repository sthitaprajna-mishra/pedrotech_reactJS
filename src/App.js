import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Pedro" age={21} email="pedro@pedro.com" />
      <User name="Natalie" age={29} email="nat@nat.com" />
      <User name="Ajay" age={19} email="ajay@ajay.com" />
    </div>
  );
}

const User = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default App;
