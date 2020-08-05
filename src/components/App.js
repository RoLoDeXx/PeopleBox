import React from "react";
import Note from "./Note";
import { Container } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Internship Task</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Note />
      </Container>
    </div>
  );
};

export default App;
