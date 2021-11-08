import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./ErrorPage.css"

export default class Header extends Component {
    render() {

        return (
            <main className="error">
                <p id="codeError">404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                <p>Retournez sur la page d'accueil</p>
                </NavLink>
            </main>
        )
    }
}