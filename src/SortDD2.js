import React, { Component } from 'react'

export default class SortDD2 extends Component {
    render() {
        return (
            <div>
                <select className="sort-dropdown2" onChange={this.props.handleChangeSortParam}>
                    <option value=''>Sort Parameters</option>
                    <option value='speed'>Speed</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                </select>
            </div>
        )
    }
}