import React from "react";

class dettable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [{ name: "John Doe", id: "ABCD1234" }],
    };
  }

  renderTableData() {
    return this.state.details.map((account, index) => {
      const { name, id } = account;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{id}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="details">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
  // render() {
  //   return (
  //     <table id="details-table">
  //       <tbody>
  //         <tr>
  //           <td>Account Name</td>
  //           <td>John Doe</td>
  //         </tr>
  //         <tr>
  //           <td>Account ID</td>
  //           <td>ABC12345</td>
  //         </tr>
  //       </tbody>
  //     </table>
  //   );
  // }
}

export default dettable;
