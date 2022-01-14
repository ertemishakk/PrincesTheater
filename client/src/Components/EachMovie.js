import React, { Component } from 'react'
import MovieLabels from './MovieLabels'
import MovieImage from './MovieImage'
import MoviePrices from './MoviePrices'
import moment from 'moment'


class EachMovie extends Component {

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getRandomDate = (start, end) => {
        let randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

        return moment(randomDate).format('dddd Do MMMM YYYY')
    }

    render() {
        return (
            <div>
                <MovieImage poster={this.props.poster} title={this.props.title} />
                <MovieLabels title={this.props.title} releaseDate={this.getRandomDate(new Date(2018, 0, 1), new Date())} movieDuration={this.getRandomNumber(100, 150)} />
                <MoviePrices cwPrice={this.props.cwPrice} fwPrice={this.props.fwPrice} />
            </div>


        )
    }
}
export default EachMovie