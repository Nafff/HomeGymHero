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
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

function Equipment(props) {
  const handleClick = (event) => {
    event.preventDefault();
    if (props.equipment.includes(event.currentTarget.value) !== true) {
      props.setEquipment(props.equipment.concat(event.currentTarget.value));
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: "#bababa",
      color: "black",
    },
    media: {
      height: 140,
    },
    gridRoot: {
      flexGrow: 1,
    },
    gridCard: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    generateButton: {
      marginTop: 10,
      marginBottom: 25,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <h5>Select The Equipment Pieces You Own</h5>
      <div className={classes.gridRoot}></div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1630053588/Home%20Gym%20Hero/pictures/barbells_orvgbr.jpg"
                  title="Barbell"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Barbell
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  value="Barbell"
                >
                  Add To Gym
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1630053588/Home%20Gym%20Hero/pictures/dumbbells_fhen6f.jpg"
                  title="Dumbbells"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dumbbells
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  value="Dumbbells"
                >
                  Add To Gym
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1630053588/Home%20Gym%20Hero/pictures/kettlebells_lfsnqs.jpg"
                  title="Kettlebells"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Kettlebells
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  value="Kettlebells"
                >
                  Add To Gym
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1630053588/Home%20Gym%20Hero/pictures/bands_weixlr.jpg"
                  title="Bands"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bands
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  value="Bands"
                >
                  Add To Gym
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1630082835/Home%20Gym%20Hero/pictures/cables_revnbu.jpg"
                  title="Cable Machine"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cable Machine
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  value="Cable Machine"
                >
                  Add To Gym
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root} elevation={3}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1630053588/Home%20Gym%20Hero/pictures/rings_hag0kp.jpg"
                  title="Gymnastic Rings"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Gymnastic Rings
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={handleClick}
                  value="Gymnastic Rings"
                >
                  Add To Gym
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        </Grid>
      </Grid>
      <>
        <Link to="/exercises/">
          <Button
            variant="contained"
            color="primary"
            endIcon={<DirectionsRunIcon />}
            className={classes.generateButton}
          >
            Generate Exercises
          </Button>
        </Link>
      </>
    </>
  );
}

export default Equipment;
