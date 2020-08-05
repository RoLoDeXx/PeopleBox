import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  text: {
    marginLeft: "1rem",
  },
}));

const Description = ({ text }) => {
  const classes = useStyles();
  return text.title ? (
    <div>
      <Typography variant="h4" gutterBottom className={classes.text}>
        {text.title}
      </Typography>
      <Divider />
      <Typography variant="subtitle2" component="p" className={classes.text}>
        {text.desc}
      </Typography>
    </div>
  ) : (
    <h4>Nothing here to show 😐</h4>
  );
};

export default Description;
