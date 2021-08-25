import "./App.css";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Sidebar from "./components/Sidebar";
import Exercises from "./components/Exercises";
import Form from "./components/Form";
import ExerciseInfo from "./components/ExerciseInfo";

// test
{<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />}
{ <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> }
// test end

function App() {
  const [equipment, setEquipment] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [workout, setWorkout] = useState([]);

  const equipPieces = ["Barbell", "Dumbbells", "Kettlebells"];

  useEffect(() => {
    const getExercises = async () => {
      const resp = await axios.get(baseURL, config);
      setExercises(resp.data.records);
    };
    getExercises();
  }, [toggleFetch]);

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
        <Sidebar
          equipment={equipment}
          exercises={exercises}
          setEquipment={setEquipment}
          workout={workout}
          setWorkout={setWorkout}
          setToggleFetch={setToggleFetch}
        />
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
          <Exercises
            equipment={equipment}
            exercises={exercises}
            workout={workout}
            setWorkout={setWorkout}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        <Route path="/exerciseinfo/:id">
          <ExerciseInfo
            exercises={exercises}
            workout={workout}
            setWorkout={setWorkout}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        <Route path="/new/">
          <Form setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/edit/:id">
          <Form exercises={exercises} setToggleFetch={setToggleFetch} />
        </Route>
      </main>
    </div>
  );
}

export default App;
