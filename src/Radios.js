import React, { Component } from 'react'

export default class Radios extends Component {
    render() {
        return (
            <div onChange={this.props.handleRadioChange}>
                <input type="radio" name="type" value="pokemon" checked="true" /> Name
                <input type="radio" name="type" value="type_1" />Type
                {/* <input type="radio" name="type" value="type_2" />Type 2 */}
            </div>
        )
    }
}
