import React, { Component } from 'react'
import "./Swatch.css"

export default class Swatch extends Component {
    render() {
        return (
            <div className="swatch" title={this.props.backgroundColor} style={{backgroundColor: this.props.backgroundColor, height: 60, width: 60}}>{this.props.backgroundColor}</div>
        )
    }
}
