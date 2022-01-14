import React, { Component } from 'react'
import { UncontrolledAlert } from 'reactstrap'

class MoviesErrors extends Component {
    render() {
        let error = this.props.error
        return (
            <div className='text-light px-3'>
                {Object.keys(error).length !== 0 && (
                    <UncontrolledAlert color="danger">
                        {error.status} - {error.statusText}  - {error.data.message}
                    </UncontrolledAlert>
                )}
            </div>
        )
    }
}
export default MoviesErrors