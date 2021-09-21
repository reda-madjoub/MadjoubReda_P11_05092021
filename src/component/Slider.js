import React, { Component } from 'react'
import './Slider.css'
import arrowLeft from '../img/leftArrow.svg'
import arrowRigth from '../img/rightArrow.svg'

export default class Slider extends Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
    }

    nextSlide(nbrImages){
        const newIndex = this.state.index < nbrImages - 1 ? this.state.index + 1 : 0
        this.setState({
            index: newIndex
        })
    }

    prevSlide(nbrImages){
        const newIndex = this.state.index > 0 ? this.state.index - 1 : nbrImages - 1
        this.setState({
            index: newIndex
        })
    }


    render() {
        const { pictures } = this.props
        return (
            <div className="slider">
                <img 
                    src={pictures[this.state.index]}
                    alt="accomodation"
                />
                <img onClick={() => this.prevSlide(pictures.length)} id="left" src={`${process.env.PUBLIC_URL}${arrowLeft}`} alt="left Arrow"/>
                <img onClick={() => this.nextSlide(pictures.length)} id="right" src={`${process.env.PUBLIC_URL}${arrowRigth}`} alt="right Arrow"/>
            </div>
        )
    }
}
