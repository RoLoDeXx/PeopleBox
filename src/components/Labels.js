import React, { useState } from "react";
import Search from "./Search";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles({
  p: {
    fontSize: "1rem",
    color: "#333333",
    margin: "1rem",
  },
  box: {
    minHeight: "85vh",
  },
});

const Labels = ({ items, setDesc }) => {
  const [labels, setLabels] = useState([]);
  const classes = useStyles();

  React.useEffect(() => {
    let items = JSON.parse(localStorage.getItem("notes"));
    if (items) setLabels(items);
  }, []);

  const fetchLabels = () => {
    let items = JSON.parse(localStorage.getItem("notes"));
    setLabels(items);
  };

  const renderList = labels.map((item) => (
    <Box key={item.time} onClick={() => setDesc(item)}>
      <Box mr={1}>
        <Typography className={classes.p} component="p" variant="subtitle2">
          {item.title}
        </Typography>
        <Typography variant="caption" component="p" align="right" gutterBottom>
          Created {moment(item.time).fromNow()}
        </Typography>
      </Box>
      <Divider />
    </Box>
  ));

  return (
    <div className={classes.box}>
      <Search fetchLabels={fetchLabels} items={labels} />
      {renderList}
    </div>
  );
};

export default Labels;
