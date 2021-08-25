import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from 'react-router-dom'

function Form(props) {
  const [exercise, setExercise] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");
  const [workoutInfo, setWorkoutInfo] = useState("");
  const [workoutTips, setWorkoutTips] = useState("");

  const params = useParams()
  const history = useHistory()

  // test code
  useEffect(() => {
    if(params.id && props.exercises.length > 0) {
        const exerciseToEdit = props.exercises.find(exercise => params.id === exercise.id)
        if(exerciseToEdit) {
          setExercise(exerciseToEdit.fields.exercise)
          setEquipment(exerciseToEdit.fields.equipment)
          setBodyPart(exerciseToEdit.fields.bodyPart)
          setVideoUrl(exerciseToEdit.fields.videoUrl)
          setWorkoutInfo(exerciseToEdit.fields.workoutInfo)
          setWorkoutTips(exerciseToEdit.fields.workoutTips)
        }
    }
}, [params.id, props.exercises])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newExercise = {
      fields: {
        exercise,
        equipment,
        bodyPart,
        videoUrl,
        workoutInfo,
        workoutTips,
      },
    };
    try {
      axios.post(baseURL, newExercise, config);
    } catch (error) {
      console.log(error);
    }
    history.push("/exercises")
    props.setToggleFetch((prevState) => !prevState)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="excerciseName">Exercise Name: </label>
      <input value={exercise} onChange={(e) => setExercise(e.target.value)} />
      <label htmlFor="excerciseName">Add Video URL: </label>
      <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
      <select
        name="select body part"
        onChange={(e) => setBodyPart(e.target.value)}
      >
        <option value="select body part" defaultValue>
          Select Body Part
        </option>
        <option value="Chest">Chest</option>
        <option value="Biceps">Biceps</option>
      </select>
      <select
        name="select equipment"
        onChange={(e) => setEquipment(e.target.value)}
      >
        <option value="select equipment" defaultValue>
          Select Equipment
        </option>
        <option value="Barbell">Barbell</option>
        <option value="Dumbbells">Dumbells</option>
      </select>
      <label htmlFor="workout description">Add Workout Description: </label>
      <textarea
        value={workoutInfo}
        onChange={(e) => setWorkoutInfo(e.target.value)}
      />
      <label htmlFor="workout tips">Add Workout Tips: </label>
      <textarea
        value={workoutTips}
        onChange={(e) => setWorkoutTips(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
