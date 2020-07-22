import React from "react";
import accountInfo from "../ExampleData/accountInfo.json";

class ServiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: accountInfo,
    };
  }

  renderTableData() {
    return this.state.details.map((account, index) => {
      const { name, id } = account;
      return (
        <tbody key={index}>
          <tr>
            <th> [TEMP] </th>
            <th> Services </th>
            <th> Description </th>
          </tr>
          <tr key={name}>
            <td>[TEMP] </td>
            <td className="service">{name}</td>
            <td>[TEMP]</td>
          </tr>
          <tr key={id}>
            <td>[TEMP]</td>
            <td className="service">{id}</td>
            <td>[TEMP]</td>
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

export default ServiceTable;
