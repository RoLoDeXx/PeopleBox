import React from "react";
import Search from "./Search";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  p: {
    fontSize: "1rem",
    color: "#333333",
    margin: "1rem 0 1.5rem 0",
  },
  box: {
    minHeight: "85vh",
  },
});

const Labels = ({ items }) => {
  const classes = useStyles();
  const renderList = items.map((item) => (
    <Box>
      <Typography className={classes.p} component="p" variant="subtitle2">
        {item}
      </Typography>
      <Typography variant="caption" component="p" align="right" gutterBottom>
        Created x minutes ago
      </Typography>
      <Divider />
    </Box>
  ));

  return (
    <div className={classes.box}>
      <Search />
      {renderList}
    </div>
  );
};

export default Labels;
