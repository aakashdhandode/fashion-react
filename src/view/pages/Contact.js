import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Contact() {
  return (
    <div>
      <div className="about-banner">
        <Container>
          <div className="text-center">
            <h4>Contact Us</h4>
            <ul className="breadcrumb text-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <section className="bg-no-repeat">
        <Container>
          <Row>
            <Col sm={5}>
              <div className="contact-details bg-silver-light border-theme-color-1px">
                {/* <h3 className="">
                  If You have any query{" "}
                  <span className="text-theme-colored">
                    please
                    <br />
                    contact{" "}
                  </span>
                  with us
                </h3> */}

                <ul className="list-icon theme-colored square mt-30 text-white">
                  <li>
                    <h3>Contact Us</h3>
                    {/* <i className="fa fa-map-marker text-white flot-left-contact"></i> */}
                    <i className="fa fa-phone text-white flot-left-contact"></i>
                    Change the design through a range
                    <br />
                    +01234-567890 +01234-5688765
                  </li>
                  <li>
                    <h3>Email Address</h3>
                    <i className="fa fa-envelope text-white flot-left-contact"></i>
                    info@example.com
                    <br />
                    info@example.com
                  </li>

                  <li>
                    <h3>Location</h3>
                    <i className="fa fa-map-marker text-white flot-left-contact"></i>
                    #204, Sahiti petals, 2nd street Patrika Nagar,Hitech City,
                    Madhapur Hyderabad - 500 081 Telangana State, India
                  </li>
                </ul>
                <h3 className="pb-1 text-white">Follow Us</h3>
                <div className="footer-links">
                  <div className="footer-social-icons mt-3">
                    <a href="instagram.com" target="_blank" rel="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="facebook.com" target="_blank" rel="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="linkedin.com" target="_blank" rel="">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="youtube.com" target="_blank" rel="">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="twitter.com" target="_blank" rel="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={7}>
              <div className="con-bg">
                {/* <h3 className="line-bottom">
                  Leave Your <span className="text-theme-colored">Comment</span>
                  Here
                </h3> */}
                <h3 className="con-ti">Contact Me</h3>
                <div className="Contact-form">
                  <Form>
                    <Row>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="">
                        <Form.Label>First Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            className="input-feild-height"
                            placeholder=" Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="">
                        <Form.Label>Last Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            className="input-feild-height"
                            placeholder=" Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="">
                        <Form.Label> Email </Form.Label>
                          <Form.Control
                            type="text"
                            name="email"
                            className="input-feild-height"
                            placeholder=" Email"
                          />
                        </Form.Group>
                      </Col>
                  
                      <Col sm={6}>
                        <Form.Group className="mb-3" controlId="">
                        <Form.Label>Phone Number *</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            className="input-feild-height"
                            placeholder=" Phone"
                          />
                        </Form.Group>
                      </Col>
                      <Form.Group className="mb-3" controlId="">
                      <Form.Label>Write Your Message *</Form.Label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="3"
                          placeholder="Requirement"
                        ></textarea>
                      </Form.Group>
                    </Row>
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn-theme-colored"
                    >
                      Send your message
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="google-map-code pb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2500388431886!2d78.3782063501211!3d17.447742587983775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93de5eab8731%3A0xe28813073a3d2535!2sGreen%20Aqua%20Enviro%20Projects%20Private%20Limited!5e0!3m2!1sen!2sin!4v1650624981728!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              aria-hidden="false"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Contact;
