import React, { Component } from 'react'

export default class Part extends Component {
    render() {
        const { parts } = this.props

        return (
            <div>
                <ol>
                    <li>{parts[0].name}{parts[0].exercises}</li>
                    <li>{parts[1].name}{parts[1].exercises}</li>
                    <li>{parts[2].name}{parts[2].exercises}</li>
                </ol>
            </div>
        )
    }
}
