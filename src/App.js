import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/App.css";
import "./styles/style.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },
});

function App() {
  return (
    <div>
      <div className="App">
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
      </div>
    </div>
  );
}

export default App;
