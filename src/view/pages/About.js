import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <section className="about-banner">
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
      </section>
    </div>
  );
}

export default About;
