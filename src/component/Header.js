import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../img/LOGO.png"
import "./Header.css"

export default class Header extends Component {
    render() {

        return (
            <header>
            <Link to="/">
                <img src={logo} alt="logo Kasa"/>
            </Link>
                <ul>
                <NavLink to='/'>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/about'>
                    <li>A propos</li>
                </NavLink>
                </ul>
            </header>
        )
    }
}

