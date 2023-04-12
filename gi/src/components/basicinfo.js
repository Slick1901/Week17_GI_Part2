import React from "react";
import "./BasicInfo.css";
import { Component } from "react";

// Medium
// export default class BasicInfo extends React.Component {

//   render() {
//     return (
//       <div>
//         <h2>{this.props.person.name}</h2>
//         <h3>{this.props.person.number}</h3>
//         <h3>{this.props.person.DOB}</h3>
//       </div>
//     );
//   }
// }

//Hard
export default class BasicInfo extends Component {
  render() {
    return (
      <div className="info-block">
        <div className="content">
          <h2>Name: {this.props.person.name}</h2>
          <h3>Number: {this.props.person.number}</h3>
          <h3>DOB: {this.props.person.DOB}</h3>
        </div>
      </div>
    );
  };
};