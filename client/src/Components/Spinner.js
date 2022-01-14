import React, { Component } from 'react'
import { Spinner as SpinnerComponent } from 'reactstrap'

export default class Spinner extends Component {
    render() {
        return (
            <div className='p-3 mx-auto'>
                <SpinnerComponent
                    color="light"
                />
            </div>
        )
    }
}
