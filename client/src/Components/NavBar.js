import React, { Component } from 'react'
import { NavbarBrand, Navbar, Row, Col } from 'reactstrap'

class NavBar extends Component {
    render() {
        return (
            <Navbar
                expand="md"
                style={{ background: 'linear-gradient(75.91deg, #505258 23.59%, #323438 98.15%),#c4c4c4' }}
            >
                <div className='container '>

                    <NavbarBrand href="/" className='p-3'>
                        <Row>
                            <Col className='my-auto'>
                                <div>
                                    <h1 style={{ fontSize: 30 }} className='my-0 text-light'>Prince's Theater</h1>
                                    <h1 className='my-0 text-light' style={{ fontSize: 15 }}>Where Movies Mean More</h1>
                                </div>
                            </Col>

                        </Row>

                    </NavbarBrand>

                </div >

            </Navbar>
        )
    }
}


export default NavBar