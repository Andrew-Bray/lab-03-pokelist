import React, { Component } from 'react';
import './App.css';
import PokeData from './pokemon.js'
import Header from './Header.js';
import SearchAside from './SearchAside.js';
import PokeList from './PokeList.js';

export default class App extends Component {
  //WHERE STATE GOES
  state = {
    pokemon: '',
    type_1: '',
    AZ_type: '' //
  }

  handleChangeType = e => {
    this.setState({
      type_1: e.target.value,
    });
    console.log(e.target.value)
  }

  handleChangeName = e => {
    this.setState({
      pokemon: e.target.value,
    });
  }


  render() {
    //COOL ZONE
    return (
      <div>
        <Header />
        <main>
          <SearchAside pokemons={PokeData} handleChangeType={this.handleChangeType} />
          <PokeList pokemons={PokeData}
            pokemon={this.state.pokemon}
            type_1={this.state.type_1}
            url_image={this.state.url_image}
            speed={this.state.speed}
            attack={this.state.attack}
            defense={this.state.defense} />
        </main>


      </div>
    )
  }
}


