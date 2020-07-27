import React from "react";
import Button from "@material-ui/core/Button";

class ButtonTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button-table">
        <table>
          <tbody>
            <tr>
              <td id="leftCell">
                <Button
                  id="cancelButton"
                  variant="outlined"
                  color="primary"
                  onClick={() => this.props.onClickHandler("Cancel")}
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
                  onClick={() => this.props.onClickHandler("Update")}
                  disableElevation
                >
                  Update services
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ButtonTable;
