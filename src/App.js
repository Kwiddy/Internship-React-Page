import React from "react";
//import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import "./styles/App.css";
import "./styles/style.css";

import DetTable from "./components/accountDetails.js";
import ServiceTable from "./components/accountServices.js";
import Header from "./components/header.js";
import ButtonTable from "./components/buttonTable.js";
// import * as serviceData from "./ExampleData/accountServices.json";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");

  // var fs = require("browserify-fs");
  // var fs = require("fs");

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
                      document.getElementById("actionName").innerHTML = "";
                    }}
                    id="action-alert"
                    value=""
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                id="action-alert"
              >
                Action completed successfully:
                <p id="actionName">{alertMsg}</p>
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
            <ButtonTable setOpen={setOpen} setAlertMsg={setAlertMsg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
//ReactDOM.render(<App />, document.querySelector("#root"));
