import React from "react";
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
  let [desc, setDesc] = React.useState({});
  const classes = useStyles();

  let updateDesc = (item) => {
    setDesc(item);
    // setDesc({ title, body });
  };

  return (
    <div className={classes.div}>
      <Grid container>
        <Grid item sm={4} className={classes.grid}>
          <Labels setDesc={updateDesc} />
        </Grid>
        <Grid item sm={8}>
          <Description text={desc} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Note;
