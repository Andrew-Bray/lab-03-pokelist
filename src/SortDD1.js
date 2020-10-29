import React, { Component } from 'react'

export default class SortDD1 extends Component {
    render() {
        return (
            <div>
                <select className="sort-dropdown1" onChange={this.props.handleChangeType}>
                    <option value=''>Type</option>
                    <option value='grass'>Grass</option>
                    <option value='fire'>Fire</option>
                    <option value='water'>Water</option>
                    <option value='bug'>Bug</option>
                    <option value='normal'>Normal</option>
                </select>
            </div>
        )
    }
}
