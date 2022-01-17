import React, { Component } from 'react'
import axios from 'axios'
import EachMovie from './EachMovie'
import { Row, Col, } from 'reactstrap'
import MoviesTopBar from './MoviesTopBar'
import MoviesErrors from './MoviesErrors'
import Spinner from './Spinner'
import moment from 'moment'
import NavBar from './NavBar'


export default class MovieList extends Component {
    state = {
        movies: [],
        lastUpdate: Date.now(),
        error: {},
        loading: false,
        apiCall: 0
    }

    getMovies = () => {
        this.setState({
            loading: true
        })
        axios.get('/getMovies')
            .then(res => {
                this.setState({
                    movies: res.data,
                    lastUpdate: Date.now(),
                    error: {},
                    loading: false
                })
            })
            .catch(err => {

                if (this.state.apiCall <= 10) {
                    this.getMovies()
                    this.setState({
                        apiCall: this.state.apiCall + 1
                    })
                } else {
                    this.setState({
                        movies: [],
                        error: err.response,
                        lastUpdate: Date.now(),
                        loading: false,
                        apiCall: 0
                    })
                }

            })
    }

    componentDidMount() {
        this.getMovies()
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className='container movie-list'>
                    <MoviesTopBar lastUpdate={moment(this.state.lastUpdate).format('dddd Do MMMM YYYY h:mm:ss a')} refreshMovies={this.getMovies} />
                    <MoviesErrors error={this.state.error} />
                    <div>
                        <Row className=' mx-0 '>
                            {this.state.loading ? <Spinner /> :
                                this.state.movies ?.map(movie => (
                                    <Col md='3' sm='6' xs='6' key={movie[0].ID}>
                                        <EachMovie title={movie[0].Title} poster={movie[0].Poster} cwPrice={movie[0].Price} fwPrice={movie[1].Price} />
                                    </Col>
                                ))}
                        </Row>
                    </div>
                </div>
            </div>

        )
    }
}
