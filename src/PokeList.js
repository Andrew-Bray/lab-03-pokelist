import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import { Link } from 'react-router-dom';

//this is where the component and fetch stuff should be... I think

export default class PokeList extends Component {
    render() {
        // const filteredPoke = this.props.PokeData.filter((poke) => {
        //     if (!this.props.pokemon) return true;
        //     if (poke.pokemon === this.props.pokemon) return true;
        //     return false
        // }).filter((poke) => {
        //     if (!this.props.type_1) return true;
        //     if (poke.type_1 === this.props.type_1) return true;
        //     return false;
        // })
        // // }).filter((poke) =>
        // //     if (AZ_)
        // //something something dark side alphabet sorting would be here. could make two if statements here.

        //this is where the fetch stuff goes


        return (
            <div className="poke-list">
                {this.props.pokeData.map(poke =>
                    <Link to={`/pokemon/${poke.pokemon}`}>
                        <PokeItem
                            pokemon={poke.pokemon}
                            url_image={poke.url_image}
                            speed={poke.speed}
                            attack={poke.attack}
                            defense={poke.defense}
                            type_1={poke.type_1} />
                    </Link>
                )
                }
            </div>
        )
    }
}
