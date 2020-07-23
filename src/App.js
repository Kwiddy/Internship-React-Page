import React from "react";
//import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import "./styles/App.css";
import "./styles/style.css";

import DetTable from "./components/accountDetails.js";
import ServiceTable from "./components/accountServices.js";
import Header from "./components/header.js";
import * as serviceData from "./ExampleData/accountServices.json";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // var fs = require("browserify-fs");
  var fs = require("fs");

  function updateServices(buttonCaller) {
    // setOpen(true);
    if (buttonCaller === "Update") {
      const newData = JSON.stringify(serviceData);
      const fileName = "imaginaryFile.json";
      fs.writeFile(fileName, newData, (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
          fs.readFile(fileName, "utf-8", function read(err, data) {
            if (err) {
              console.log("ERROR");
              throw err;
            }
            const content = data;
            console.log(content);
            alert(content);
          });
        }
      });
    }
  }

  return (
    <div className="App">
      <div className={classes.root}>
        <Header mainText="Your account" subText="Linked services" />
        <div className="page-wrapper">
          <div className="page-block">
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                    id="action-alert"
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                id="action-alert"
              >
                Action completed successfully (See Console)
              </Alert>
            </Collapse>
            <div className="account-details">
              <Typography variant="h5">Account details</Typography>
              <DetTable />
            </div>
            <Divider variant="middle" />
            <div className="available-services">
              <Typography variant="h5">Available services</Typography>
              <ServiceTable />
            </div>
            <Divider variant="middle" />
            <div className="button-table">
              <table>
                <tbody>
                  <tr>
                    <td id="leftCell">
                      <Button
                        id="cancelButton"
                        variant="outlined"
                        color="primary"
                        onClick={() => updateServices("Cancel")}
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
                        onClick={() => updateServices("Update")}
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
//ReactDOM.render(<App />, document.querySelector("#root"));
