import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

function Details() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const small = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mtb-5">
      <Container>
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Saree Blouse</a>
          </li>
          <li>Product Name</li>
        </ul>
        <Row className="product-details-img">
          <Col sm={6}>
            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
            </Slider>
            <Slider
              {...small}
              asNavFor={nav1}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
              <div>
                <Image
                  src={require("../assets/images/product-img/5.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </div>
            </Slider>
          </Col>
          <Col sm={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Details;
