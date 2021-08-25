import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const handleEquipRemove = (event) => {
    event.preventDefault();
    props.setEquipment(
      props.equipment.filter((piece) => piece !== event.target.value)
    );
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleExerciseRemove = (event) => {
    event.preventDefault();
    props.setWorkout(
      props.workout.filter((exercise) => exercise !== event.target.value)
    );
    props.setToggleFetch((prevState) => !prevState);
  };

  const handleExerciseId = (name) => {
    if (props.workout.length > 0) {
      const match = props.exercises.find(
        (exercise) => exercise.fields.exercise === name
      );
      return match.id
    }
  };

  return (
    <>
      <div className="ownedEquip">
        <ul>
          {props.equipment.map((piece) => (
            <>
              <li>{piece}</li>{" "}
              <button onClick={handleEquipRemove} value={piece}>
                -
              </button>
            </>
          ))}
        </ul>
      </div>
      <div className="selectedExercises">
        <ul>
          {props.workout.map((exercise) => (
            <>
              <Link to={`/exerciseinfo/${handleExerciseId(exercise)}`}>
                <li>{exercise}</li>
              </Link>
              <button onClick={handleExerciseRemove} value={exercise}>
                -
              </button>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
