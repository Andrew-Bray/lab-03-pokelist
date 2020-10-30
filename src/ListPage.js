import React, { Component } from 'react';
import './App.css';
import fetch from 'superagent';
import SearchAside from './SearchAside.js';
import PokeList from './PokeList.js';

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class ListPage extends Component {
    //WHERE STATE GOES
    state = {
        pokeData: [],
        SortAsc: 'asc',
        search: '',
        SortParam: '',
        radio: 'pokemon',
        //desceneing
        // sort by speed
        // sort by attack
        // sort by defense
        // which 'pokemon': '',
        // which 'type_1'
    }


    fetchPokemon = async () => {
        const SortAsc = this.state.SortAsc;
        const SortParam = this.state.SortParam;
        const search = this.state.search;
        const type = this.state.radio;
        //const Type = this.state.type;
        const API = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';
        const apiRequest = API + type + '=' + search + '&sort=' + SortParam + '&direction=' + SortAsc;
        console.log(apiRequest);
        const response = await fetch.get(apiRequest);
        this.setState({ pokeData: '' });
        await sleep(1500);
        console.log(response.body.results);
        this.setState({ pokeData: response.body.results });
    }


    componentDidMount = async () => {
        // const response = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');

        // this.setState({ pokeData: response.body.results });
        // console.log(response.body);
        await this.fetchPokemon()
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
        this.setState({ search: e.target.value });
        console.log(e.target.value)
    };

    handleRadioChange = async (e) => {
        this.setState({
            radio: e.target.value
        });
        console.log(e.target.value);
    };

    handleClick = async (e) => {
        await this.fetchPokemon();
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
                    {
                        !this.state.pokeData.length

                            ? <div className="gif-holder">
                                <iframe src="https://giphy.com/embed/JUh0yTz4h931K"
                                    width="480"
                                    height="322"
                                    title="search"
                                    frameBorder="0"
                                    class="giphy-embed"
                                    allowFullScreen />
                            </div> :

                            <PokeList pokeData={this.state.pokeData}
                                SortAsc={this.state.SortAsc}
                            />
                    }
                </main>


            </div>
        )
    }
}


