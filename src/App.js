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
            <Typography variant="h1" component="h2" gutterBottom>
              Lorem Ipsum
            </Typography>
            <Typography variant="h2" gutterBottom>
              Dolor Si Amet
            </Typography>
          </div>
        </header>
      </div>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </div>
  );
}

export default App;
