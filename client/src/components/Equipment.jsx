// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// function Equipment(props) {
//   const equipPieces = [
//     "Barbell",
//     "Dumbbells",
//     "Kettlebells",
//     "Bands",
//     "Squat Rack",
//     "Bench",
//   ];

//   const handleClick = (event) => {
//     event.preventDefault();
//     if (props.equipment.includes(event.currentTarget.value) !== true) {
//       props.setEquipment(props.equipment.concat(event.currentTarget.value));
//     }
//   };

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       minWidth: 100,
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//     gridRoot: {
//       flexGrow: 1,
//     },
//     gridCard: {
//       padding: theme.spacing(1),
//       textAlign: "center",
//       color: theme.palette.text.secondary,
//     },
//   }));

//   const classes = useStyles();

//   return (
//     <>
//       <div className={classes.gridCard}>
//         <Grid container spacing={1} justifyContent="space-between">
//           <Grid container item xs={3} spacing={2} justifyContent="center">
//             <Grid item m={4}>
//               <Card className={classes.root}>
//                 <CardActionArea>
//                   <CardMedia
//                     className={classes.media}
//                     image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
//                     title="Contemplative Reptile"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="h2">
//                       Dumbbells
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//                 <CardActions>
//                   <Button
//                     size="small"
//                     color="primary"
//                     onClick={handleClick}
//                     value="Dumbbells"
//                   >
//                     Add To List
//                   </Button>
//                   <Button size="small" color="primary">
//                     Learn More
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>

//         </Grid>
//       </div>
//       <>
//         <Link to="/exercises/">
//           <Button variant="contained">Generate Exercises</Button>
//         </Link>
//       </>
//     </>
//   );
// }

// export default Equipment;

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
import Paper from "@material-ui/core/Paper";

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
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.gridRoot}></div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item m>
          <div className={classes.gridCard}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                  title="Contemplative Reptile"
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
                  Add To List
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                  title="Contemplative Reptile"
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
                  Add To List
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                  title="Contemplative Reptile"
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
                  Add To List
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                  title="Contemplative Reptile"
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
                  Add To List
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                  title="Contemplative Reptile"
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
                  Add To List
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://image.shutterstock.com/image-photo/crossfit-equipment-on-floor-gym-600w-756989800.jpg"
                  title="Contemplative Reptile"
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
                  Add To List
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
          <Button variant="contained">Generate Exercises</Button>
        </Link>
      </>
    </>
  );
}

export default Equipment;
