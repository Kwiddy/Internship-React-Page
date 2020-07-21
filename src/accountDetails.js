import React from "react";

class dettable extends React.Component {
  render() {
    return (
      <table id="details-table">
        <tbody>
          <tr>
            <td>Account Name</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>Account ID</td>
            <td>ABC12345</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default dettable;
