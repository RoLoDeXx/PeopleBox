import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Input,
  TextField,
  Typography,
  Grid,
  Modal,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  input: {
    border: "1px solid #ccc",
    borderRadius: "50px",
    width: "85%",
  },

  searchIcon: {
    color: "#ddd",
    marginLeft: "0.5rem",
  },

  plusIcon: {
    color: "#66a2d9",
    fontSize: "2rem",
    cursor: "pointer",
  },

  form: {
    width: "100%",
    marginTop: "0.5rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  text: {
    display: "block",
  },
}));

const Search = ({ fetchLabels, items }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormControl className={classes.form}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item className={classes.input}>
            <Input
              disableUnderline
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon className={classes.searchIcon} />
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item>
            <AddIcon className={classes.plusIcon} onClick={handleOpen} />
          </Grid>
        </Grid>
      </FormControl>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form
              className={classes.form}
              onSubmit={() => {
                localStorage.setItem(
                  "notes",
                  JSON.stringify([
                    { title, desc, time: new Date().getTime() },
                    ...items,
                  ])
                );
                handleClose();
                fetchLabels();
              }}
            >
              <Typography variant="h5">Add note</Typography>
              <TextField
                id="title"
                label="Title"
                value={title}
                className={classes.text}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="desc"
                label="Description"
                value={desc}
                className={classes.text}
                onChange={(e) => setDesc(e.target.value)}
              />
              <Box mt={2}>
                <Button type="submit" variant="outlined" color="primary">
                  Add note
                </Button>
              </Box>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Search;
