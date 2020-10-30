import React, { Component } from 'react'

export default class SortDD1 extends Component {
    render() {
        return (
            <div>
                <select className="sort-dropdown1" onChange={this.props.handleChangeSortAsc}>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
            </div>
        )
    }
}


//This information should go into the radio buttons

// export default class SortDD1 extends Component {
//     render() {
//         return (
//             <div>
//                 <select className="sort-dropdown1" onChange={this.props.handleChangeType}>
//                     <option value=''>Type</option>
//                     <option value='grass'>Grass</option>
//                     <option value='fire'>Fire</option>
//                     <option value='water'>Water</option>
//                     <option value='bug'>Bug</option>
//                     <option value='normal'>Normal</option>
//                 </select>
//             </div>
//         )
//     }
// }
