import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: "80%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: 10,
    marginBottom: 25,
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
          variant="outlined"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-helperText"
          label="Video URL:"
          defaultValue="Default Value"
          helperText="Please enter the text after https://www.youtube.com/watch?v="
          variant="outlined"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <br />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Body Part
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={bodyPart}
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
        <br />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Equipment
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            label="Select Body Part"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Barbell">Barbell</MenuItem>
            <MenuItem value="Dumbbells">Dumbells</MenuItem>
          </Select>
        </FormControl>
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Workout Description:"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          value={workoutInfo}
          onChange={(e) => setWorkoutInfo(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="Workout Tips:"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          value={workoutTips}
          onChange={(e) => setWorkoutTips(e.target.value)}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          type="submit"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form;
