import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="pokeitem">
                <h3>{this.props.pokemon}</h3>
                <img src={this.props.url_image} alt={this.props.pokemon} />
                <p> Type: {this.props.type_1}</p>
                <p>Attack: {this.props.attack}</p>
                <p>Defense: {this.props.defense}</p>
                <p>Speed: {this.props.speed}</p>
            </div>
        )
    }
}
