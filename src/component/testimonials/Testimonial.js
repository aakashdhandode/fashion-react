import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './testimonial.css'

function Testimonial() {
    return (
        <div>
            <section className='bg--redon text-center testimonial-section'>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={9} xs={12}>
                            <div className="justify-content-center row">
                                <div className="col-md-6">
                                    <div className="section-title text-center space-mb--25">
                                        <h2>Our Client Say!</h2>
                                    </div>
                                </div>
                            </div>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <div className="testimonial-desc space-mb--25">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur
                                            debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit
                                            tempora voluptatem.</p>
                                    </div>
                                    <div className="author-wrap">
                                        <div className="author-img">
                                            <img src="https://oility.jamstacktemplates.dev/assets/images/users/user_img1.jpg" alt="user_img1" />
                                        </div>
                                        <div className="author-name text-left">
                                            <h6>Lois Thompson</h6>
                                            <p>Designer</p> 
                                            <div className='test-star'>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="testimonial-desc space-mb--25">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur
                                            debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit
                                            tempora voluptatem.</p>
                                    </div>
                                    <div className="author-wrap">
                                        <div className="author-img">
                                            <img src="https://oility.jamstacktemplates.dev/assets/images/users/user_img1.jpg" alt="user_img1" />
                                        </div>
                                        <div className="author-name text-left">
                                            <h6>Lois Thompson</h6>
                                            <p>Designer</p> 
                                            <div className='test-star'>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </div>

                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>





        </div>





    )
}

export default Testimonial