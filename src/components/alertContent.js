import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class AlertContent extends React.Component {
  updateProps() {
    this.props.setOpen(false);
  }

  render() {
    return (
      <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => this.updateProps()}
        id="action-alert"
        value=""
      >
        <CloseIcon fontSize="inherit" id="close-icon" />
      </IconButton>
    );
  }
}

export default AlertContent;
