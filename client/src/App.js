import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "./services";
import Exercises from "./components/Exercises";
import Form from "./components/Form";
import ExerciseInfo from "./components/ExerciseInfo";
import Equipment from "./components/Equipment";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Footer from "./components/Footer";
import "./App.css";

{
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  />;
}
{
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />;
}

function App() {
  const [equipment, setEquipment] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [workout, setWorkout] = useState([]);

  const [theme, setTheme] = useState({
    palette: {
      type: "dark",
      background: {
        default: "#222222",
      },
    },
  });

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "dark" ? "light" : "dark";
    setTheme({
      palette: {
        type: newPaletteType,
      },
    });
  };

  const toggleTheme = createTheme(theme);

  useEffect(() => {
    const getExercises = async () => {
      const resp = await axios.get(baseURL, config);
      setExercises(resp.data.records);
    };
    getExercises();
  }, [toggleFetch]);

  return (
    <ThemeProvider theme={toggleTheme}>
      <CssBaseline />
      <div className="App">
        <Header
          equipment={equipment}
          exercises={exercises}
          setEquipment={setEquipment}
          workout={workout}
          setWorkout={setWorkout}
          setToggleFetch={setToggleFetch}
          theme={theme}
          setTheme={setTheme}
          onToggleDark={toggleDarkTheme}
        />
        <CssBaseline />
        <Container maxWidth="md">
          <Paper elevation={3} className="paperContainer">
            <main>
              <br />
              <Route path="/" exact>
                <Equipment equipment={equipment} setEquipment={setEquipment} />
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
          </Paper>
        </Container>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
