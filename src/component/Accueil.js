import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Accueil.css'
import { data } from "../data/data.js"

export default class Accueil extends Component {
    render() {
        return (
            <main>
                    <div className="container">
                {
                    data.map((card, key) => 
                        <NavLink key={key} to={`/rent/${card.id}`}>
                            <article>
                                <div className="cover"></div>
                                <img src={card.cover} alt={card.title} />
                                <h3>{card.title}</h3>
                            </article>
                        </NavLink>
                    )
                }
                    </div>
            </main>
        )
    }
}
