import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Equipment(props) {
  const equipPieces = ["Barbell", "Dumbbells", "Kettlebells"];

  const handleClick = (event) => {
    event.preventDefault();
    if (props.equipment.includes(event.currentTarget.value) !== true) {
      props.setEquipment(props.equipment.concat(event.currentTarget.value));
    }
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <>
      {equipPieces.map((piece) => (
        <>
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
        </>
      ))}
      <>
        <Link to="/exercises/">
          <Button variant="contained">Generate Exercises</Button>
        </Link>
      </>
    </>
  );
}

export default Equipment;
