import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Who's your Favorite Pokemon?</h1>
                <Link to="/">Home</Link>
                <Link to="/list">Pokemons!!</Link>
                <Link to="/paginate">Paginated Pokemons!!</Link>
            </header>
        )
    }
}
//
//
//
//
//
