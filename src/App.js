import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
            <div className="account-details"> this is the account-details </div>
            <hr />
            <div className="available-services">
              this is the available-services
            </div>
            <hr />
            <div className="button-table">
              <table>
                <tbody>
                  <tr>
                    <td id="leftCell">
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          alert("TEMP Cancelled");
                        }}
                        disableElevation
                      >
                        Cancel
                      </Button>
                    </td>
                    <td id="rightCell">
                      <Button
                        id="updateButton"
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          alert("TEMP Services updated");
                        }}
                        disableElevation
                      >
                        Update services
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.querySelector("#root"));
