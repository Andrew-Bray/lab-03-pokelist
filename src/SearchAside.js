import React, { Component } from 'react';
import SearchInput from './SearchInput.js';
import SortDD1 from './SortDD1.js';
import SortDD2 from './SortDD2.js'
//import Radios from './Radios.js';

export default class SearchAside extends Component {
    render() {
        return (
            <div className="search-aside">
                <SortDD1 handleChangeType={this.props.handleChangeType} />
                <SortDD2 />
                <SearchInput />
            </div>
        )
    }
}
