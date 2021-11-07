import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"
import logo_footer from "../img/LOGO _FOOTER.png"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <NavLink to="/">
                    <img src={logo_footer} alt="logo dark version"/>
                </NavLink>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        )
    }
}
