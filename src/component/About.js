import React, { Component } from 'react'
import Accordion from './Accordion'
import mountain from '../img/MOUNTAIN.png'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <img src={ mountain } alt='Mountain'/>
                <Accordion />
            </div>
        )
    }
}