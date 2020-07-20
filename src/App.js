import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/App.css";
import "./styles/style.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <header>
          <div className="headText">
            <Typography variant="h1" component="h2" fontSize="1" id="mainHead">
              Lorem ipsum
            </Typography>
            <Typography variant="h2" gutterBottom id="subHead">
              Dolor si amet
            </Typography>
          </div>
        </header>
        <div className="page-wrapper">
          <div className="page-block">
            <p> this is the page-block</p>
            <div className="account-details"> this is the account-details </div>
            <div className="available-services">
              this is the available-services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
