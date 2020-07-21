import React from "react";
import Typography from "@material-ui/core/Typography";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="headText">
          <Typography variant="h1" component="h2" fontSize="1" id="mainHead">
            Your account
          </Typography>
          <Typography variant="h2" gutterBottom id="subHead">
            Linked services
          </Typography>
        </div>
      </header>
    );
  }
}

export default Header;
