import React from "react";
import accountInfo from "./ExampleData/accountInfo.json";

class dettable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: accountInfo,
    };
  }

  // This method should be improved: would return a child unique
  //    key error if two of name, id, and index were identical
  renderTableData() {
    return this.state.details.map((account, index) => {
      const { name, id } = account;
      return (
        <tbody key={index}>
          <tr key={name}>
            <td style={{ width: "25%" }}>Account Name </td>
            <td>{name}</td>
          </tr>
          <tr key={id}>
            <td style={{ width: "25%" }}>Account ID</td>
            <td>{id}</td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="details">{this.renderTableData()}</table>
      </div>
    );
  }
}

export default dettable;
