import React from 'react'
import './header.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { BiZoomIn } from 'react-icons/bi';
import MegaMenu from './MegaMenu';

export default function Header() {
  return (
    <div>
    <header className='top-bar'>
        <Container>
            <Row>
                <Col sm={3}>
                   <Image src={require('../../assets/images/logo.png')} className="logo"/>
                </Col>
                <Col sm={5}>
                    <Row>
                        <div className="header-search">
                            <form>
                                <Row>
                                    <Col sm={10} xs={10} className="pr-0">
                                        <input type="search" className="form-control" placeholder="Search for products and brands" />
                                    </Col>
                                    <Col sm={2} xs={2} className="pl-0">
                                        <button className="btn btn-search btn-block" type="submit">
                                            <BiZoomIn /> 
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                       </div>
                    </Row>
                </Col>
                <Col sm={4}>
                    <div className="header-links">
                        <div className='top-navbar'>
                            <ul className="pull-right">
                                <li><a href="/wishlist"><Image  src={require('../../assets/images/wish.png')}/> &nbsp; Wish List</a></li>
                                <li><a href="/cart"><Image  src={require('../../assets/images/cart.png')}/> &nbsp; My Cart</a></li>
                                <li><a href="/cart"><Image  src={require('../../assets/images/user.png')}/> &nbsp; Hi, Admin</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </header>
        <MegaMenu />
        
    </div>
  )
}
