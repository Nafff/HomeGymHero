import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Exercises(props) {
  const [exercises, setExercises] = useState([]);
  const [availableExercises, setAvailableExercises] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      const resp = await axios.get(baseURL, config);
      setExercises(resp.data.records);
    };
    getExercises();
    // console.log(exercises);
    // exercises.map((exercise) => {
    //   if (props.equipment.includes(exercise.fields.equipment)) {
    //     setAvailableExercises(availableExercises.concat(exercise));
    //   }
    // });
    // console.log(availableExercises)
  }, []);

  return (
    <>
      <h1>Hello here are exercises</h1>
      {/* {exercises.map((exercise) => (
        <>
          {console.log(exercise)}
          <p>{exercise.fields.exercise}</p>
        </>
      ))} */}
      {/* {exercises.map((exercise) => {
        if (props.equipment.includes(exercise.fields.equipment)) {
          // console.log(exercise.fields.equipment)
          <>
            {console.log(exercise.fields.equipment)}
            {console.log(exercise.fields.exercise)}
            <p>{exercise.fields.exercise}</p>
          </>;
        }
      })} */}
      {/* {availableExercises.map((availableExercise) => (
        <>
          {console.log(availableExercise)}
          <p>{availableExercise.fields.exercise}</p>
        </>
      ))} */}
    </>
  );
}

export default Exercises;
