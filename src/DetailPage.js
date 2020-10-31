import React, { Component } from 'react';
import fetch from 'superagent';



//this is where the component and fetch stuff should be... I think

export default class DetailPage extends Component {
    state = {
        pokeData: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokepage}`);
        console.log(this.props.match.params.pokepage);
        this.setState({ pokeData: response.body.results });
    }
    render() {

        return (
            <div>
                <h3>{this.props.match.params.pokepage}'s page!</h3>
                {
                    this.state.pokeData.length === 0
                        ? 'loading!!!'
                        : this.state.pokeData.map(poke => <div className="pokeitem">
                            <h2>{poke.pokemon}</h2>
                            <img src={poke.url_image} alt={poke.pokemon} />
                            <p> Type: {poke.type_1}</p>
                            <p>Attack: {poke.attack}</p>
                            <p>Defense: {poke.defense}</p>
                            <p>Speed: {poke.speed}</p>
                            <p>Ability: {poke.ability_1}</p>
                            <p>Hdden Ability: {poke.ability_hidden}</p>
                        </div>)

                }
            </div>

        )
    }
}
