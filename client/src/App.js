import "./App.css";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";

function App() {
  const [equipment, setEquipment] = useState([]);

  const equipPieces = ["Barbell", "Dumbbells"];

  useEffect(() => {
    const getEquipment = async () => {
      const resp = await axios.get(baseURL, config);
      setEquipment(resp.data.records);
    };
    getEquipment();
  }, []);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Route path="/" exact>
        {equipPieces.map((piece) => (
          <>
            <p>{piece}</p>
            <button>Add to list</button>
          </>
        ))}
      </Route>
    </div>
  );
}

export default App;
