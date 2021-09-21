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

    nextSlide(){
        const newIndex = this.state.index < 4 ? this.state.index + 1 : 0
        this.setState({
            index: newIndex
        })
    }

    prevSlide(){
        const newIndex = this.state.index > 0 ? this.state.index - 1 : 4
        this.setState({
            index: newIndex
        })
    }


    render() {
        const { pictures } = this.props
        console.log(this.state.index);
        return (
            <div className="slider">
                <img 
                    src={pictures[this.state.index]}
                    alt="accomodation"
                />
                <img onClick={this.prevSlide} id="left" src={arrowLeft}alt="left Arrow"/>
                <img onClick={this.nextSlide} id="right" src={arrowRigth}alt="right Arrow"/>
            </div>
        )
    }
}
