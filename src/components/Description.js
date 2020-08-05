import React from "react";
import { Divider, Typography } from "@material-ui/core";
const Description = ({ text }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {text.title}
      </Typography>
      <Divider />
      <Typography variant="subtitle2" component="p">
        {text.desc}
      </Typography>
    </div>
  );
};

export default Description;
