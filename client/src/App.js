import "./App.css";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Sidebar from "./components/Sidebar";
import Exercises from "./components/Exercises";

function App() {
  const [equipment, setEquipment] = useState([]);

  const equipPieces = ["Barbell", "Dumbbells", "Kettlebells"];

  // useEffect(() => {
  //   const getEquipment = async () => {
  //     const resp = await axios.get(baseURL, config);
  //     setEquipment(resp.data.records);
  //   };
  //   getEquipment();
  // }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (equipment.includes(event.target.value) !== true) {
      setEquipment(equipment.concat(event.target.value));
    }
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Sidebar equipment={equipment} />
      </nav>
      <main>
        <Route path="/" exact>
          {equipPieces.map((piece) => (
            <>
              <button onClick={handleClick} value={piece}>
                {piece}
              </button>
            </>
          ))}
          <>
            <Link to="/exercises/">
              <button>Generate Exercises</button>
            </Link>
          </>
        </Route>
        <Route path="/exercises/">
          <Exercises equipment={equipment}/>
        </Route>
        <Route path="/new/">
          <Form />
        </Route>
      </main>
    </div>
  );
}

export default App;
