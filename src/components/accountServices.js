import React from "react";
import CheckBox from "./checkbox.js";
import accountServices from "../ExampleData/accountServices.json";
import "../styles/serviceTableStyle.css";

class ServiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: accountServices,
    };
  }

  handleAllChecked = (event) => {
    let services = this.state.services;
    services.forEach((service) => (service.isChecked = event.target.checked));
    this.setState({ services: services });
  };

  handleCheckChieldElement = (event) => {
    let services = this.state.services;
    services.forEach((service) => {
      if (service.value === event.target.value)
        service.isChecked = event.target.checked;
    });
    this.setState({ services: services });
  };

  renderTableData() {
    return this.state.services.map((service, index) => {
      const { id } = service;
      return (
        <tr key={id}>
          <td className="service">
            <CheckBox
              key={index}
              id={id}
              handleCheckChieldElement={this.handleCheckChieldElement}
              {...service}
            />
          </td>
          <td>Description of service lorem ipsum dolor sit amet</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="services-table">
          <tbody>
            <tr id="headRow">
              <th>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      onChange={this.handleAllChecked}
                      value="checkedall"
                      id="checkedall"
                      ref="checkedall"
                    />
                    <label htmlFor="checkedall"></label>
                    Services
                  </li>
                </ul>
              </th>
              <th> Description </th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ServiceTable;
