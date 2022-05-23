import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Testimonial from "../../component/testimonials/Testimonial";
import FetursCard from "./FetursCard";

function About() {
  return (
    <div>
      <section className="">
        <div className="about-banner">
          <Container>
            <div className="text-center">
              <h4>About Us</h4>
              <ul className="breadcrumb text-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Admin</Link>
                </li>
                <li>
                  <Link to="/">My Orders</Link>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <div className="about-main">
          <Container>
            <Row>
              <Col sm={6}>
                <div className="water-mark">
                  <span class="xs-watermark-text">HISTORY</span>
                  <h2 class="xs-heading-sub">Our History</h2>
                  <h3 class="xs-heading-title">
                    Creative and renovate fashion trends
                  </h3>
                  <p class="about-con">
                    Collaboratively administrate empowered markets via
                    plug-and-play maintain networks. Dynamically usable
                    procrastinate B2B users after installed base benefits.
                    Dramatically visualize customer directed convergence without
                    revolutionary ROI.
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit illo, est repellendus are quia voluptate neque
                    reiciendis ea placeat labore maiores cum, hic ducimus ad a
                    dolorem soluta consectetur adipisci. Perspiciatis quas ab
                    quibusdam is.
                  </p>
                </div>
              </Col>

              <Col sm={6}>
                <Row className="ab-img">
                  <Col sm={6}>
                    {" "}
                    <Image
                      src={require("../../assets/images/ab2.png")}
                      className=""
                      alt="product image"
                    />
                  </Col>
                  <Col sm={6}>
                    {" "}
                    <Image
                      src={require("../../assets/images/ab1.png")}
                      className="xd-mt-5"
                      alt="product image"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="vision">
          <Container>
            <Row>
              <Col sm={6}>
                <Image
                  src={require("../../assets/images/vision.png")}
                  alt="product image"
                />
              </Col>
              <Col sm={6}>
                {/* <span class="xs-watermark-text">Vision</span> */}
                <h2 class="xs-heading-sub">Our Vision</h2>
                <h3 class="xs-heading-title">We are marketpress</h3>
                <p class="about-con">
                  Dynamically procrastinate B2C users after installed base
                  benefits. Dramatically visualize customer directed convergence
                  without revolutionary ROI.
                  <ul className="mt-5">
                    <li>Credibly innovate granular internal</li>
                    <li>Grantedly underconstructions reloaded</li>
                    <li>Interactively procrastinate high-payoff</li>
                    <li>Completely synergize resource taxing relationships</li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="counter text-center">
          <Container>
            <Row>
              <Col sm={3}>
                <div className="">
                  <h2>12 +</h2>
                  <p>Years Experience</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="">
                  <h2>20K</h2>
                  <p>Happy Customers</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="">
                  <h2>100%</h2>
                  <p>Clients Satisfaction</p>
                </div>
              </Col>
              <Col sm={3}>
                <div className="">
                  <h2>12 +</h2>
                  <p>Years Experience</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Testimonial />
        <FetursCard />
      </section>
    </div>
  );
}

export default About;
