import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Exercises(props) {

  const availEx = props.exercises.filter(exercise => props.equipment.includes(exercise.fields.equipment))

  const handleAdd = (event) => {
    event.preventDefault()
    props.setWorkout(props.workout.concat(event.target.value))
    console.log(event.target.value)
  }

  return (
    <>
      <h1>Hello here are exercises</h1>
      {availEx.map((exercise) => (
        <>
          <Link to={`/exerciseinfo/${exercise.id}`}>{exercise.fields.exercise}</Link> <button onClick={handleAdd} value={exercise.fields.exercise}>Add To Workout</button>
        </>
      ))
      }
      <Link to={"/new/"}><button>Create New Exercise</button></Link>
    </>
  );
}

export default Exercises;
