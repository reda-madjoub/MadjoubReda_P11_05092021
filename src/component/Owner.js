import React, { Component } from 'react'
import './Owner.css'

export default class Owner extends Component {
    render() {
        const {picture, name} = this.props.host
        return (
            <div className="owner">
                <p>{name}</p>
                <img src={picture}  alt={name}/>
            </div>
        )
    }
}
