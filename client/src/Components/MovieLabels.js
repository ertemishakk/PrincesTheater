import React, { Component } from 'react'

export default class MovieLabels extends Component {


    render() {
        return (
            <div className='text-light'>
                <h1 className='font-weight-bold' style={{ fontSize: 15 }}>{this.props.title}</h1>
                <p className='my-0' data-testid='release-date' style={{ fontSize: 12, color: '#89898A' }}>Release Date: {this.props.releaseDate}</p>
                <p className='my-0' data-testid='movie-duration' style={{ fontSize: 12, color: '#89898A' }}>{this.props.movieDuration} mins</p>
            </div>
        )
    }
}
