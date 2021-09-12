import React, { Component } from 'react'
import Accordion from './Accordion'
import mountain from '../img/MOUNTAIN.png'
import './About.css'


const allValues = {
    1: {
        nameValue: "Fiabilité",
        descriptionValue: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    2: {
        nameValue: "Respect",
        descriptionValue: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    3: {
        nameValue: "Service",
        descriptionValue: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    4: {
        nameValue: "Sécurité",
        descriptionValue: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
}
export default class About extends Component {
    state = {
        allValues,
    }
    render() {
        const liste = Object.keys(allValues).map(el => 
            <Accordion 
                name={allValues[el].nameValue} 
                description={allValues[el].descriptionValue}    
            />)
        return (
            <main className="ourValues">
                <img src={mountain} alt='Mountain '/>
                { liste }
            </main>
        )
    }
}