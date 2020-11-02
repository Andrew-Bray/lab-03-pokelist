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
        search: '',
        SortParam: '',
        radio: 'pokemon',
        pageNum: 1,
        count: 0,
        perPage: '20',
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
        const page = this.state.pageNum;
        const perPage = this.state.perPage;
        //const Type = this.state.type;
        const API = `https://alchemy-pokedex.herokuapp.com/api/pokedex?`;
        const apiRequest = API + '&' + type + '=' + search + '&sort=' + SortParam + '&direction=' + SortAsc + '&page=' + page + '&perPage=' + perPage;
        console.log(apiRequest);
        const response = await fetch.get(apiRequest);
        this.setState({ pokeData: '' });
        //await sleep(200);
        console.log(response.body.results);
        this.setState({
            pokeData: response.body.results,
            count: response.body.count,
            perPage: response.body.perPage
        });
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
        this.setState({
            pageNum: 1
        })
        await this.fetchPokemon();
    };

    pagePrev = async () => {
        await this.setState({
            pageNum: this.state.pageNum - 1
        })
        await this.fetchPokemon();
    };

    pageNext = async () => {
        await this.setState({
            pageNum: this.state.pageNum + 1
        })
        await this.fetchPokemon();
    };



    render() {
        //COOL ZONE
        return (
            <div>
                <main>
                    <SearchAside pokeData={this.state.pokeData}
                        handleChangeSortAsc={this.handleChangeSortAsc} handleChangeName={this.handleChangeName}
                        handleClick={this.handleClick} handleChangeSortParam={this.handleChangeSortParam}
                        handleRadioChange={this.handleRadioChange} pagePrev={this.pagePrev}
                        pageNext={this.pageNext}
                        pageNum={this.state.pageNum}
                        count={this.state.count}
                        perPage={this.state.perPage}
                    />
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


