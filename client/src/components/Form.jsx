import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Form(props) {
  const [exercise, setExercise] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");
  const [workoutInfo, setWorkoutInfo] = useState("");
  const [workoutTips, setWorkoutTips] = useState("");

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id && props.exercises.length > 0) {
      const exerciseToEdit = props.exercises.find(
        (exercise) => params.id === exercise.id
      );
      if (exerciseToEdit) {
        setExercise(exerciseToEdit.fields.exercise);
        setEquipment(exerciseToEdit.fields.equipment);
        setBodyPart(exerciseToEdit.fields.bodyPart);
        setVideoUrl(exerciseToEdit.fields.videoUrl);
        setWorkoutInfo(exerciseToEdit.fields.workoutInfo);
        setWorkoutTips(exerciseToEdit.fields.workoutTips);
      }
    }
  }, [params.id, props.exercises]);

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
    history.push("/exercises");
    props.setToggleFetch((prevState) => !prevState);
  };

  // return (
  //   <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
  //     <div>
  //     <label htmlFor="excerciseName">Exercise Name: </label>
  //     <input value={exercise} onChange={(e) => setExercise(e.target.value)} />
  //     <label htmlFor="excerciseName">Add Video URL: </label>
  //     <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
  //     <select
  //       name="select body part"
  //       onChange={(e) => setBodyPart(e.target.value)}
  //     >
  //       <option value="select body part" defaultValue>
  //         Select Body Part
  //       </option>
  //       <option value="Chest">Chest</option>
  //       <option value="Biceps">Biceps</option>
  //     </select>
  //     <select
  //       name="select equipment"
  //       onChange={(e) => setEquipment(e.target.value)}
  //     >
  //       <option value="select equipment" defaultValue>
  //         Select Equipment
  //       </option>
  //       <option value="Barbell">Barbell</option>
  //       <option value="Dumbbells">Dumbells</option>
  //     </select>
  //     <label htmlFor="workout description">Add Workout Description: </label>
  //     <textarea
  //       value={workoutInfo}
  //       onChange={(e) => setWorkoutInfo(e.target.value)}
  //     />
  //     <label htmlFor="workout tips">Add Workout Tips: </label>
  //     <textarea
  //       value={workoutTips}
  //       onChange={(e) => setWorkoutTips(e.target.value)}
  //     />
  //     <input type="submit" value="Submit" />
  //     </div>
  //   </form>
  // );

  const classes = useStyles();

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-helperText"
          label="Exercise Name:"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <TextField
          id="outlined-helperText"
          label="Video URL:"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Body Part
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            onChange={(e) => setBodyPart(e.target.value)}
            label="Select Body Part"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Chest">Chest</MenuItem>
            <MenuItem value="Biceps">Biceps</MenuItem>
          </Select>
        </FormControl>
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
      </div>
    </form>
  );
}

export default Form;
