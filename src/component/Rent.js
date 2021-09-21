import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Rent.css'
import {data} from '../data/data.js'
import Accordion from './Accordion'
import Rating from './Rating'
import Owner from './Owner'
import Tags from './Tags'
import Title from './Title'
import Slider from './Slider'


export default class Rent extends Component {
    getRent = () => data.filter(obj => obj.id === this.props.match.params.id)
    render() {
        const checkId = data.filter(elt => elt.id === this.props.match.params.id)
        if(!checkId[0]) return <Redirect to="/error" />
        if(this.props.match.params.id !== checkId[0].id ) return <Redirect to="/error" />
        const {
            description,
            equipments,
            host,
            location,
            pictures,
            rating,
            tags,
            title
         } = this.getRent()[0]

        return (
            <div className="rent">
                <Slider pictures={pictures}/>
            <div className="contentRent">
                <div className="textInfo">
                    <Title title={title} location={location}/>
                    <Tags tags={tags}/>
                </div>
                <div className="imgInfo">
                    <Rating rating={rating}/>
                    <Owner host={host}/>
                </div>
            </div>
                <div className="dropdown">
                    <Accordion 
                        isOpen={false}
                        name="Description"
                        description={description}
                    />
                    <Accordion 
                        isOpen={false}
                        name="Equipments" 
                        description={equipments}
                    />
                </div>
            </div>
        )
    }
}
