import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Equipment(props) {
  const equipPieces = [
    "Barbell",
    "Dumbbells",
    "Kettlebells",
    "Bands",
    "Squat Rack",
    "Bench",
  ];

  const handleClick = (event) => {
    event.preventDefault();
    if (props.equipment.includes(event.currentTarget.value) !== true) {
      props.setEquipment(props.equipment.concat(event.currentTarget.value));
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    gridRoot: {
      flexGrow: 1,
    },
    gridCard: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {equipPieces.map((piece) => (
            <div className={classes.gridCard}>
              <Grid item xs={4}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {piece}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={handleClick}
                      value={piece}
                    >
                      Add To List
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
      <>
        <Link to="/exercises/">
          <Button variant="contained">Generate Exercises</Button>
        </Link>
      </>
    </>
  );
}

export default Equipment;
