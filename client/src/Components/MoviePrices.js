import React, { Component } from 'react'
import { Badge } from 'reactstrap'

export default class MoviePrices extends Component {
    render() {
        let cwPrice = this.props.cwPrice.toFixed(2)
        let fwPrice = this.props.fwPrice.toFixed(2)
        return (
            <div className='text-light'>

                {cwPrice < fwPrice ? (
                    <div className='mt-1'>
                        <p style={{ fontSize: 15 }}>CinemaWorld: <Badge color='success'>${cwPrice}</Badge></p>
                        <p>FimWorld: <Badge color='light'>${fwPrice}</Badge></p>

                    </div>
                ) : (
                        <div className='mt-1'>
                            <p>FimWorld: <Badge color='success'>${fwPrice}</Badge></p>
                            <p>CinemaWorld: <Badge color='light' >${cwPrice}</Badge></p>
                        </div>
                    )}
            </div>
        )
    }
}
