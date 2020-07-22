import React from "react";
import accountInfo from "../ExampleData/accountInfo.json";
import CheckBox from "./checkbox.js";
import "../styles/serviceTableStyle.css";

class ServiceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: accountInfo,
      services: [
        { id: 1, value: "Service 1", isChecked: false },
        { id: 2, value: "Service 2", isChecked: false },
      ],
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
    return this.state.details.map((account, index) => {
      const { id } = account;
      return (
        <tbody key={index}>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={this.handleAllChecked}
                value="checkedall"
              />
              Services
            </th>
            <th> Description </th>
          </tr>
          {this.state.services.map((service, index) => {
            return (
              <tr key={id}>
                <td className="service">
                  <CheckBox
                    key={index}
                    handleCheckChieldElement={this.handleCheckChieldElement}
                    {...service}
                  />
                </td>
                <td>Description of service lorem ipsum dolor sit amet</td>
              </tr>
            );
          })}
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
