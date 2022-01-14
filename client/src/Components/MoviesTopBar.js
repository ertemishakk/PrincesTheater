import React, { Component } from 'react'
import { Row, Col, UncontrolledTooltip } from 'reactstrap'

class MoviesTopBar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1 className='text-light mt-2 p-3 ' style={{ fontSize: 20 }}>Now Showing</h1>
                    </Col>
                    <Col className='text-right'>
                        <p style={{ fontSize: 12 }} className='text-light mt-2 p-3  '>
                            Last updated: {this.props.lastUpdate}
                            <span className='pl-2'><i onClick={this.props.refreshMovies} id="refresh-tooltip" title="refresh-tooltip" className="fas fa-redo" style={{ fontSize: 15, cursor: 'pointer' }}></i></span>
                        </p>

                        <UncontrolledTooltip
                            placement="right"
                            target="refresh-tooltip"
                        >
                            Refresh
                            </UncontrolledTooltip>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default MoviesTopBar