import React, { Component } from 'react'
import './Tags.css'

export default class Tags extends Component {
    render() {
        const {tags} = this.props
        return (
            <div className="content-tag">
                {tags.map((el, index) => (
                    <div key={index} className="tag">
                        {el}
                    </div>
                ))}
            </div>
        )
    }
}
