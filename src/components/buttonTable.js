import React from "react";
import Button from "@material-ui/core/Button";
import * as serviceData from "../ExampleData/accountServices.json";

class ButtonTable extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  updateServices(buttonCaller) {
    this.props.setOpen(true);
    console.log(this.props);
    this.props.setAlertMsg(buttonCaller);

    if (buttonCaller === "Update") {
      // const newData = JSON.stringify(serviceData);
      // const fileName = "imaginaryFile.json";
      // fs.writeFile(fileName, newData, (err) => {
      //   if (err) {
      //     console.log("Error writing file", err);
      //   } else {
      //     console.log("Successfully wrote file");
      //     fs.readFile(fileName, "utf-8", function read(err, data) {
      //       if (err) {
      //         console.log("ERROR");
      //         throw err;
      //       }
      //       const content = data;
      //       console.log(content);
      //     });
      //   }
      // });
      alert(JSON.stringify(serviceData));
    }
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
                  onClick={() => this.updateServices("Cancel")}
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
                  onClick={() => this.updateServices("Update")}
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
