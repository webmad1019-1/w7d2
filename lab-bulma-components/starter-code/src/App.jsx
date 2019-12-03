import React, { Component } from "react";
import CoolButton from "./CoolButton";

export default class App extends Component {
  render() {
    return (
      <div>
        <CoolButton isMedium isDanger className="is-rounded my-class">
          Manué
        </CoolButton>
      </div>
    );
  }
}
