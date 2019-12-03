import React, { Component } from "react";
import "./Swatch.css";

export default class Swatch extends Component {
  sayColor(backgroundColor) {
    alert("You have chosen " + backgroundColor);
  }

  render() {
    return (
      <div
        onClick={backgroundColor => this.sayColor(this.props.backgroundColor)}
        className="swatch"
        title={this.props.backgroundColor}
        style={{ backgroundColor: this.props.backgroundColor, height: 60, width: 60 }}
      >
        {this.props.backgroundColor}
      </div>
    );
  }
}
