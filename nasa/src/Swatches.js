import React, { Component } from "react";
import Swatch from "./Swatch";
import "./Swatches.css";

export default class Swatches extends Component {
  render() {
    return (
      <div className="swatches">
        <h1>Swatches interface</h1>
        <ul>
          {this.props.colors.map(color => (
            <li>
              <Swatch backgroundColor={color}></Swatch>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
