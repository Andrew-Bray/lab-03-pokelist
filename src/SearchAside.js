import React, { Component } from 'react';
import SearchInput from './SearchInput.js';
import SortDD1 from './SortDD1.js';
import SortDD2 from './SortDD2.js';
import Radios from './Radios.js';
//import Radios from './Radios.js';

export default class SearchAside extends Component {
    render() {
        return (
            <div className="search-aside">
                <SortDD1 handleChangeSortAsc={this.props.handleChangeSortAsc} />
                <SortDD2 handleChangeSortParam={this.props.handleChangeSortParam} />
                <SearchInput handleChangeName={this.props.handleChangeName} handleClick={this.props.handleClick} />
                <Radios handleRadioChange={this.props.handleRadioChange} />

                <button onClick={this.props.pagePrev} disabled={this.props.pageNum === 1}>Previous</button>



                <button onClick={this.props.pageNext} disabled={this.props.pageNum === Math.ceil(this.props.count / this.props.perPage)}>Next</button>

                <div> Page {this.props.pageNum} out of {Math.ceil(this.props.count / this.props.perPage)}</div>
            </div>
        )
    }
}
