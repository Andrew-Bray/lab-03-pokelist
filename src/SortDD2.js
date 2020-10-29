import React, { Component } from 'react'

export default class SortDD2 extends Component {
    render() {
        return (
            <div>
                <select className="sort-dropdown2">
                    <option value='name'>Pokemon Name</option>
                    <option value='type'>Type</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                </select>
            </div>
        )
    }
}