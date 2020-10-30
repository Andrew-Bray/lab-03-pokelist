import React, { Component } from 'react'

export default class SearchInput extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleChangeName} />
                <button onClick={this.props.handleClick}>Search here</button>

            </div>
        )
    }
}
