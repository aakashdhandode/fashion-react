import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ProductsCard from "../component/product/ProductsCard";

function Details() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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

          <Col sm={6}>
            <div className="product-info">
              <h4>STYLE NO. 234235</h4>
              <h1>
                Men Blue Tapered Fit Mid-Rise Mildly Distressed Stretchable
                Jeans
              </h1>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <div className="clearfix"></div>
              <div className="product-info-price">
                <h5>
                  Rs.2399 <del>Rs.2699</del>{" "}
                  <span className="off">(20% OFF)</span>
                </h5>
                <h6>You will save Rs.300</h6>
              </div>
              <div className="product-info-size">
                <h5>Select Size</h5>
                <button className="size-btn btn-size-active">32</button>
                <button className="size-btn">34</button>
                <button className="size-btn">36</button>
                <button className="size-btn">38</button>
                <div className="clearfix"></div>
                <a href="">Check Size Chart</a>
              </div>
              <div className="product-info-size">
                <h5>Select Color</h5>
                <button className="size-btn btn-size-active">32</button>
                <button className="size-btn">34</button>
                <button className="size-btn">36</button>
                <button className="size-btn">38</button>
                <div className="clearfix"></div>
              </div>
              <div className="product-info-size">
                <h5>Delivery Options</h5>
                <form action="">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pincode"
                  />
                </form>
              </div>
              <div className="product-info-size">
                <ul>
                  <li>100% Original Products</li>
                  <li>Free Delivery on order above Rs. 799</li>
                  <li>Pay on delivery might be available</li>
                  <li>Easy 30 days returns and exchanges</li>
                  <li>Try &amp; Buy might be available</li>
                </ul>
              </div>
              <div className="product-info-size">
                <button className="btn-cart">
                  <i className="fa fa-shopping-basket"></i> &nbsp; add to cart
                </button>
                <button className="btn-wishlist">
                  <i className="fa fa-heart-o"></i> &nbsp; add to wishlist
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row sm={12} className="mt-4">
          <h5>Product Details</h5>
          <div className="product-info-size">
            <ul>
              <li>100% Original Products</li>
              <li>Free Delivery on order above Rs. 799</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 30 days returns and exchanges</li>
              <li>Try &amp; Buy might be available</li>
            </ul>
          </div>
        </Row>
        <div className="border-top-d mt-30 pt-50"></div>
        <section className="similar-pro">
          <h5>SIMILAR PICKS</h5>
          <Row>
            <div className="col-md-3">
              <ProductsCard />
            </div>
            <div className="col-md-3">
              <ProductsCard />
            </div>
            <div className="col-md-3">
              <ProductsCard />
            </div>
            <div className="col-md-3">
              <ProductsCard />
            </div>
          </Row>
        </section>
        <div className="border-top-d mt-30 pt-50"></div>
        <section className="product-review">
          <h5>CUSTOMERS REVIEWS</h5>
          <h4>5.0</h4>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
        </section>

        <section>
          <div className="testimonial-card">
            <div className="user-thumb">
              <img
                src="http://127.0.0.1:8000/images/users/1.jpg"
                className="img-responsive"
                alt="Irish Deer"
              />
            </div>
            <div className="user-info">
              <h5>Sumaiya Karim</h5>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <div className="clearfix"></div>
              <h4>Very Good</h4>
              <p>
                Love it! Really good, looking forwars to more shopping from
                Kalki Fashion.
              </p>
            </div>
            <div className="clearfix"></div>
          </div>
        </section>

        <section>
          <div className="testimonial-card">
            <div className="user-thumb">
              <img
                src="http://127.0.0.1:8000/images/users/1.jpg"
                className="img-responsive"
                alt="Irish Deer"
              />
            </div>
            <div className="user-info">
              <h5>Sumaiya Karim</h5>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <div className="clearfix"></div>
              <h4>Very Good</h4>
              <p>
                Love it! Really good, looking forwars to more shopping from
                Kalki Fashion.
              </p>
            </div>
            <div className="clearfix"></div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Details;
