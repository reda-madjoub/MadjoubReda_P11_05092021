import React, { Component } from 'react'
import './Accordion.css'
import arrow from '../img/arrow_dropdown.svg'

export default class Accordion extends Component {
    state = {
        isOpen: false
    }

    toggleList = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    // NE FONCTIONNE PAS SANS LES FONCTION FLECHEES
    // toggleList() {
    //     this.setState({isOpen: !this.state.isOpen})
    // }

    render() {
        const {name, description} = this.props
        const {isOpen} = this.state

        return (
            <article className="principle">
                <div className="principleHeader"
                    onClick={this.toggleList} 
                >
                    <p>{name}</p>
                    <img 
                        className={isOpen ? "down" : "up"}
                        src={arrow}
                        alt="arrow to open and close element view"
                    />
                </div>
                <div className="principleContent">
                    {
                        Array.isArray(description) ? 
                        description.map((el,index) => 
                        <p style={{"paddingTop": "20px"}} className={`hide ${isOpen ? "show" : ""}`} key={index}>{el}</p>) 
                        : 
                        <p style={{"paddingTop": "20px" ,"lineHeight" :"30px"}} className={`hide ${isOpen ? "show" : ""}`}>{description}</p>
                        
                    }
                </div>
            </article>
        )
    }
}
