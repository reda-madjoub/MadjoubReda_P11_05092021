import React, { Component } from 'react'
import './Rating.css'
import stars_color from '../img/STARS_COLOR.svg'
import stars from '../img/STARS.svg'

export default class Rating extends Component {
    render() {
        const {rating} = this.props
        const RATE = []
        let temp = rating
        const MAX_RATE = 5
        for (let i = 0; i < MAX_RATE; i++) {
            temp > 0 ? RATE.push(<img src={stars_color} alt="star"/>) : RATE.push(<img src={stars} alt="star"/>)
            temp--;
        }
        return (
            <div className="rating">
                {
                    RATE.map((elt, index) => (
                       <span key={index}>{elt}</span>
                    ))
                }
            </div>
        )
    }
}
