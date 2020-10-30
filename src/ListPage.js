import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';
import SearchAside from './SearchAside.js';
import PokeList from './PokeList.js';

export default class ListPage extends Component {
    //WHERE STATE GOES
    state = {
        pokeData: [],
        SortAsc: 'asc',
        name: '',
        SortParam: '',
        Type: '',
        //desceneing
        // sort by speed
        // sort by attack
        // sort by defense
        // which 'pokemon': '',
        // which 'type_1'
    }

    componentDidMount = async () => {
        const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');

        this.setState({ pokeData: response.body.results });
        console.log(response.body);
    }

    handleChangeSortParam = async (e) => {
        this.setState({ SortParam: e.target.value });
        console.log(e.target.value);
    }

    handleChangeSortAsc = async (e) => {
        this.setState({ SortAsc: e.target.value });

        //const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=defense&direction=desc');

        //this.setState({ pokeData: response.body.results });
        console.log(e.target.value)
    }

    handleChangeName = async (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
        console.log(e.target.value)
    };

    // handleRadioChange = async (e) {
    //     this.setState({
    //         Type: e.target.value
    //     });
    // };

    handleClick = async (e) => {
        const SortAsc = this.state.SortAsc;
        const SortParam = this.state.SortParam;
        const name = this.state.name;
        //const Type = this.state.type;
        const API = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=';
        const apiRequest = API + name + '&sort=' + SortParam + '&direction=' + SortAsc;
        console.log(apiRequest);
        const response = await fetch.get(apiRequest);

        console.log(response.body.results);

        this.setState({ pokeData: response.body.results });
    }



    render() {
        //COOL ZONE
        return (
            <div>
                <main>
                    <SearchAside pokeData={this.state.pokeData}
                        handleChangeSortAsc={this.handleChangeSortAsc} handleChangeName={this.handleChangeName}
                        handleClick={this.handleClick} handleChangeSortParam={this.handleChangeSortParam}
                        handleRadioChange={this.handleRadioChange} />
                    {/* {
                        this.state.pokeData.length === 0
                            ? <iframe
                                src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
                                title={Math.random()}
                                width="480"
                                height="480"
                                frameBorder="0"
                                className="giphy-embed"
                                allowFullScreen /> :
 */}

                    <PokeList pokeData={this.state.pokeData}
                        SortAsc={this.state.SortAsc}
                    />
                    {/* } */}
                </main>


            </div>
        )
    }
}


