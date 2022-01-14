import React, { Component } from 'react'

export default class MovieImage extends Component {
    render() {
        return (
            <div style={{ cursor: 'pointer' }}>
                <img className='img-fluid movie-image'
                    src={this.props.poster} alt={this.props.title} />
            </div>
        )
    }
}
