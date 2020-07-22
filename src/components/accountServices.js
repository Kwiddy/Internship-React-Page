import React from "react";
import accountInfo from "../ExampleData/accountInfo.json";
import Checkbox from "./checkbox.js";

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
            <th>
              {" "}
              <Checkbox />{" "}
            </th>
            <th> Services </th>
            <th> Description </th>
          </tr>
          <tr key={name}>
            <td>
              <Checkbox />
            </td>
            <td className="service">Service 1</td>
            <td>Description of service lorem ipsum dolor sit amet</td>
          </tr>
          <tr key={id}>
            <td>
              <Checkbox />
            </td>
            <td className="service">Service 2</td>
            <td>Description of service lorem ipsum dolor sit amet</td>
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
