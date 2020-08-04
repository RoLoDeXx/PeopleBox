import React from "react";
import { Divider, Typography } from "@material-ui/core";
const Description = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom></Typography>
      <Divider />
      <Typography variant="subtitle2" component="p"></Typography>
    </div>
  );
};

export default Description;
