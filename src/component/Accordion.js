import React, { Component } from 'react'
import './Accordion.css'
import arrow from '../img/arrow_dropdown.svg'

export default class Accordion extends Component {
    render() {
        return (
            <article className="principle">
                <div className="principleHeader">
                    <p>{this.props.name}</p>
                    <img src={arrow} alt="arrow to open and close element view"/>
                </div>
                <div className="principleContent">
                    <p>{this.props.description}</p>
                </div>
            </article>
        )
    }
}
