import React, { Component } from 'react'
import './Title.css'

export default class Title extends Component {
    render() {
        const {title, location} = this.props
        return (
            <div className="RentTitle">
                <h2>{title}</h2>
                <h4>{location}</h4>
            </div>
        )
    }
}
