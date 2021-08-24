import { baseURL, config } from "../services";
import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [exercise, setExercise] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");
  const [workoutInfo, setWorkoutInfo] = useState("");
  const [workoutTips, setWorkoutTips] = useState("");

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
    console.log(newExercise);
    try {
      axios.post(baseURL, newExercise, config);
    } catch (error) {
      console.log(error);
    }
    // props.setToggleFetch((prevState) => !prevState)
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
        <option value="chest">Chest</option>
        <option value="biceps">Biceps</option>
      </select>
      <select
        name="select equipment"
        onChange={(e) => setEquipment(e.target.value)}
      >
        <option value="select equipment" defaultValue>
          Select Equipment
        </option>
        <option value="barbell">Barbell</option>
        <option value="dumbbells">Dumbells</option>
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
