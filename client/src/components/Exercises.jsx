import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Exercises(props) {
  // const [exercises, setExercises] = useState([]);
  // const [availableExercises, setAvailableExercises] = useState([]);

  // exercises.map((exercise) => {
  //   console.log(exercise)
  //   if (props.equipment.includes(exercise.fields.equipment)) {
  //     setAvailableExercises(availableExercises.concat(exercise.fields.exercise))
  //   }
  // })

  // console.log(availableExercises)

  // exercises.map((exercise) => {
  //   console.log(exercise.fields.equipment)
  //   if (props.equipment.includes(exercise.fields.equipment)) {
  //     console.log(exercise.fields.equipment, props.equipment)
  //     setAvailableExercises(availableExercises.concat(exercise.fields.exercise))
  //   } else {
  //   }
  // })

  // useEffect(() => {
  //   const getExercises = async () => {
  //     const resp = await axios.get(baseURL, config);
  //     console.log(resp);
  //     setExercises(resp.data.records);
  //   };
  //   getExercises();
  // }, []);

  // useEffect(() => {
  //   console.log(props.exercises, props.equipment);
  //   props.exercises.map((exercise) => {
  //     if (props.equipment.includes(exercise.fields.equipment)) {
  //       setAvailableExercises(
  //         availableExercises.concat(exercise.fields.exercise)
  //       );
  //     }
  //   });
  // }, []);

  return (
    <>
      <h1>Hello here are exercises</h1>
      {/* {props.exercises.map((exercise) => (
        <>
          {console.log(exercise)}
          <p>{exercise.fields.exercise}</p>
        </>
      ))} */}
      {/* {props.exercises.map((exercise) => {
        if (props.equipment.includes(exercise.fields.equipment)) {
          // console.log(exercise.fields.equipment)
          <>
            {console.log(exercise.fields.equipment)}
            {console.log(exercise.fields.exercise)}
            <p>{exercise.fields.exercise}</p>
            {props.setToggleFetch((prevState) => !prevState)}
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
