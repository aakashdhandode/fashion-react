import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../component/banner/Banner";
import Testimonial from "../component/testimonials/Testimonial";
import ProductsCard from "../component/product/ProductsCard";
import FetursCard from "./pages/FetursCard";
export default function Home() {
  return (
    <div>
      <Banner />
      <section className="category-section pt-5 pb-2">
        <Container>
          <div className="section-title text-center">
            <h2 className="ec-title">STYLES FOR HER</h2>
          </div>
          <Row>
            <Col lg={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/cat1.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Pants</h3>
                </Link>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/cat2.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Sweater</h3>
                </Link>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/cat3.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Tops</h3>
                </Link>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/cat04.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Saree</h3>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="category-section pt-5 pb-2">
        <Container>
          <div className="section-title text-center">
            <h2 className="ec-title">STYLES FOR HIM</h2>
          </div>
          <Row>
            <Col lg={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/mcat1.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>T-Shart</h3>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/mcat3.png")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Trousers</h3>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/mcat4.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Casuals</h3>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="category-card">
                <Link to="/products">
                  <div className="figure">
                    <Image
                      src={require("../assets/images/product-img/mcat5.webp")}
                      className=""
                      alt="product image"
                    />
                  </div>
                  <h3>Blazers</h3>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-5">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="section-title text-center">
                <h2 className="ec-title">ETHINIC WEAR</h2>
              </div>
            </Col>
            <Col sm={6}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/e1.png")}
                  className=""
                  alt="product image"
                />
                <div>
                  <Link to="/">
                    <span>Bestsellers</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/e2.png")}
                  className=""
                  alt="product image"
                />
                <div>
                  <Link to="/">
                    <span>Bestsellers</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/e3.png")}
                  className=""
                  alt="product image"
                />
                <div>
                  <Link to="/">
                    <span>Bestsellers</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/e4.png")}
                  className=""
                  alt="product image"
                />
                <div>
                  <Link to="/">
                    <span>Bestsellers</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/e5.png")}
                  className=""
                  alt="product image"
                />
                <div>
                  <Link to="/">
                    <span>Bestsellers</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="banner-area bg--blue-two space-pt-mobile-only--60">
          <div className="container">
            <div className="align-items-center flex-row-reverse row">
              <div className="offset-md-1 col-md-6">
                <div className="medium-divider d-none d-md-block clearfix"></div>
                <div className="trending-text  text-md-left">
                  <div className="heading-wrapper mb-3">
                    <span>New season trends!</span>
                    <h2>Best Summer Collection</h2>
                  </div>
                  <h5 className="mb-4">Sale Get up to 50% Off</h5>
                  <Link to="/" className="btn-fill-out rounded-0">
                    Shop Now
                  </Link>
                </div>
                <div className="medium-divider clearfix"></div>
              </div>
              <div className="col-md-5">
                <div className="text-center trending-img">
                  <Image
                    src={require("../assets/images/product-img/trending_img.png")}
                    className=""
                    alt="product image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="section-title text-center">
                <h2 className="ec-title">OFFERS FOR YOU</h2>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    {/* <Image src={require('../assets/images/product-img/t-shart.webp')} className="" alt="product image" /> */}
                    <img src="https://cdn.vmartretail.com/images/banners/divisionbannery2.jpg" />
                  </div>
                  <div className="offers-title-price">
                    <h4>T-Shart Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://cdn.shopify.com/s/files/1/0105/8881/5418/products/HJ22-1578_360x.jpg?v=1643269722" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Tops Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://cdn.shopify.com/s/files/1/0105/8881/5418/products/J22-0713.jpg?v=1641624765" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Kurta Sets Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://i.ytimg.com/vi/dqE44bZjcGA/maxresdefault.jpg" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Jeans Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://st.depositphotos.com/3029723/4759/i/950/depositphotos_47595341-stock-photo-fashion-kids-resting-on-the.jpg" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Kidswear Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://cdn.cliqueinc.com/posts/281511/best-holy-grail-makeup-products-281511-1589389412382-main.700x0c.jpg" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Beauty Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://3.bp.blogspot.com/-E3ld4k3Bjic/W3pYD5FiqtI/AAAAAAAAAAo/XTE9W317IvIVW4XTCWJr_y-FHone2dcXACLcBGAs/s1600/bridal%2Bwear1.jpg" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Beauty Under</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="offers-card-bg">
                <Link to="/">
                  <div className="offers-card">
                    <img src="https://i.pinimg.com/474x/13/e0/a5/13e0a5f5046e6225b01c6071f3de882e.jpg" />
                  </div>
                  <div className="offers-title-price">
                    <h4>Groom Dress</h4>
                    <p>
                      <span>₹</span>499
                    </p>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <div className="container mt-60 pt-5">
          <div className="row">
            <div className="col-md-12">
              <Col sm={12}>
                <div className="section-title text-center">
                  <h2 className="ec-title">TOP PICKS</h2>
                </div>
              </Col>
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
            <div className="col-md-3">
              <ProductsCard />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
            <Col lg={3} xs={6}>
              <div className="logo-card text-center">
                <Link to="/">
                  <Image
                    src={require("../assets/images/product-img/cl1.png")}
                    className=""
                    alt="product image"
                  />
                  <h2>40% OFF</h2>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ptb-200">
        <Container>
          <Row>
            <Col sm={3}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/fp1.png")}
                  className="img-responsive"
                  alt="product image"
                />
                <h1>THE BANDHANI CHRONICLES</h1>
                <div>
                  <Link to="/">
                    {" "}
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/fp2.png")}
                  className="img-responsive"
                  alt="product image"
                />
                <h1>FESTIVE JEWELRY SETS</h1>
                <div>
                  <Link to="/">
                    {" "}
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="ethinic-card">
                <Image
                  src={require("../assets/images/product-img/fp3.png")}
                  className="img-responsive"
                  alt="product image"
                />
                <h1>KALKI SPECIAL EDIT</h1>
                <div>
                  <Link to="/">
                    {" "}
                    <span>Shop Now</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Testimonial />
    <FetursCard />
    </div>
  );
}
