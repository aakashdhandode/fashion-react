
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './footer.css'
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";




export const Footer = () => {
   return (
      <div>
     
         <footer className="footer-dark">
            <div className="footer-top">
               <Container>
                  <Row>
                     <Col sm={3}>
                        <div className="widget">
                           <div className="footer-logo"><a href="/"><Image src={require('../../assets/images/logob.png')} /></a></div>
                           <p>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                        </div>
                        <div className="widget">
                           <ul className="social-icons">
                              <li>
                                 <a href="/"><i className="fab fa-instagram"></i> </a>
                              </li>
                              <li>
                                 <a href="/"><i className="fab fa-facebook-f"></i></a>
                              </li>
                              <li>
                                 <a href="/"><i className="fab fa-linkedin"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="/"><i className="fab fa-youtube"></i>
                                 </a>
                              </li>
                              <li>
                                 <a href="/"><i className="fab fa-twitter"></i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </Col>
                     <Col sm={2} xs={6}>
                        <div className="widget">
                           <h6 className="widget-title">Useful Links</h6>
                           <ul className="widget-links">
                              <li><Link to="/about">About Us</Link></li>
                              <li><a href="/">FAQ</a></li>
                              <li><a href="/">Location</a></li>
                              <li><a href="/">Affiliates</a></li>
                              <li><a href="/">Contact</a></li>
                           </ul>
                        </div>
                     </Col>
                     <Col sm={2} xs={6}>
                        <div className="widget">
                           <h6 className="widget-title">Category</h6>
                           <ul className="widget-links">
                              <li><a href="/shop/grid-left-sidebar">Men</a></li>
                              <li><a href="/shop/grid-left-sidebar">Woman</a></li>
                              <li><a href="/shop/grid-left-sidebar">Kids</a></li>
                              <li><a href="/shop/grid-left-sidebar">Best Seller</a></li>
                              <li><a href="/shop/grid-left-sidebar">New Arrivals</a></li>
                           </ul>
                        </div>
                     </Col>
                     <Col sm={2}>
                        <div className="widget">
                           <h6 className="widget-title">My Account</h6>
                           <ul className="widget-links">
                              <li><a href="/other/my-account">My Account</a></li>
                              <li><a href="/">Discount</a></li>
                              <li><a href="/">Returns</a></li>
                              <li><a href="/">Orders History</a></li>
                              <li><a href="/">Order Tracking</a></li>
                           </ul>
                        </div>
                     </Col>
                     <Col sm={3}>
                        <div className="widget">
                           <h6 className="widget-title">Contact Info</h6>
                           <ul className="contact-info contact-info-light">
                              <li>
                                 <HiLocationMarker />
                                 <p>Cyber View Towers, Innovative, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081</p>
                              </li>
                              <li>
                                 <GrMail />
                                 <a href="/">info@exaple.com</a>
                              </li>
                              <li>
                                 <BsFillTelephoneFill />
                                 <p>+91 12345 67890</p>
                              </li>
                           </ul>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
            <div className="bottom-footer border-top--grey">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <p className="mb-3 mb-md-0 text-md-left">
                           © Copyright 2022 Toolet , Design & develop by<a href="" target="_blank"> ODMS Pvt Ltd</a>
                        </p>
                     </div>
                     <div className="col-md-6">
                        <ul className="footer-payment text-center text-lg-right">

                           <li><a href="/"><Image src={require('../../assets/images/visa.png')} /></a></li>
                           <li><a href="/"><Image src={require('../../assets/images/discover.png')} /></a></li>
                           <li><a href="/"><Image src={require('../../assets/images/master_card.png')} /></a></li>
                           <li><a href="/"><Image src={require('../../assets/images/paypal.png')} /></a></li>
                           <li><a href="/"><Image src={require('../../assets/images/amarican_express.png')} /></a></li>

                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </footer>







      </div>
   )
}
