import React, { Component } from 'react'

export default class ScientistComponent extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.laura}</h1>
                <img src={this.props.img} alt="" height="100" />
                <a href={this.props.link}>Go to wikipedia</a>
            </div>
        )
    }
}
