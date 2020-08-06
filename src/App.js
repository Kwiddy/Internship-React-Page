import React from "react";
//import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
// import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import "./styles/App.css";
import "./styles/style.css";

import DetTable from "./components/accountDetails.js";
import ServiceTable from "./components/accountServices.js";
import Header from "./components/header.js";
import ButtonTable from "./components/buttonTable.js";
import AlertContent from "./components/alertContent.js";
// import * as serviceData from "./ExampleData/accountServices.json";
import accountServices from "./ExampleData/accountServices.json";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [services, setServices] = React.useState(accountServices);
  const [alertMsg, setAlertMsg] = React.useState("");

  return (
    <div className="App">
      <div className={classes.root}>
        <Header mainText="Your account" subText="Linked services" />
        <div className="page-wrapper">
          <div className="page-block">
            <Collapse in={open}>
              <Alert
                action={<AlertContent setOpen={setOpen} />}
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
              <ServiceTable setServices={setServices} />
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
