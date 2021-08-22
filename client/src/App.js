import "./App.css";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";

function App() {

  const [equipment, setEquipment] = useState([])

  useEffect(() => {
    const getEquipment = async () => {
      const resp = await axios.get(baseURL, config)
      setEquipment(resp.data)
    }
    getEquipment()
  }, [])

  console.log(equipment)

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      
    </div>
  )
}

export default App;
