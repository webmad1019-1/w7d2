import React, { Component } from "react";
import Swatch from "./Swatch";
import "./Swatches.css";

export default class Swatches extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
      selectedColor: "#cccccc"
    };
  }

  toggle() {
    let toggledState = !this.state.open;

    this.setState({
      ...this.state,
      open: toggledState
    });
  }

  componentDidMount() {
    // here you could access the DOM of this component, as it has already been mounted
    // and it is present in the viewport
    console.log("this component now has been mounted")
  }

  render() {
    return (
      <div className="swatches" id="visualisation">
        <header>
          <h1>Swatches interface ({this.props.colors.length})</h1>
          <button onClick={() => this.toggle()}>{this.state.open ? "^" : "v"}</button>
        </header>
        {this.state.open && (
          <ul>
            {this.props.colors.map((color, idx) => (
              <li key={idx}>
                <Swatch backgroundColor={color}></Swatch>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
