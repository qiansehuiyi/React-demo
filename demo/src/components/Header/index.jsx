import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { course } = this.props
        return (
            <div>
                <h1>{course}</h1>
            </div>
        )
    }
}
