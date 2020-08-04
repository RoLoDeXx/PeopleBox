import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Labels from "./Labels";
import Description from "./Description";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  div: {
    border: "1px solid",
  },
  grid: {
    borderRight: "1px solid ",
  },
}));

const Note = () => {
  const [items, setItems] = React.useState([]);
  const classes = useStyles();
  useEffect(() => {
    // localStorage.getItem("hadam");
    // return () => {
    //     cleanup
    // }
  }, [items]);

  // let items = [
  //   "Physics Lecture Notes",
  //   "Calculas Notes",
  //   "Chemistry Notes",
  //   "Exam Schedule",
  //   "Semester Exam Syllabus",
  // ];

  return (
    <div className={classes.div}>
      <Grid container>
        <Grid item sm={4} className={classes.grid}>
          <Labels items={items} />
        </Grid>
        <Grid item sm={8}>
          <Description />
        </Grid>
      </Grid>
    </div>
  );
};

export default Note;
