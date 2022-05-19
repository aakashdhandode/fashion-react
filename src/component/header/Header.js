import React from "react";
import "./header.css";
import { Col, Container, Image, Row, Dropdown } from "react-bootstrap";
import { BiZoomIn } from "react-icons/bi";
import MegaMenu from "./MegaMenu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="top-bar">
        <Container>
          <Row>
            <Col sm={3}>
              <Link to="/">
                {" "}
                <Image
                  src={require("../../assets/images/logo.png")}
                  className="logo"
                />
              </Link>
            </Col>
            <Col sm={5}>
              <Row>
                <div className="header-search">
                  <form>
                    <Row>
                      <Col sm={10} xs={10} className="pr-0">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search for products and brands"
                        />
                      </Col>
                      <Col sm={2} xs={2} className="pl-0">
                        <button
                          className="btn btn-search btn-block"
                          type="submit"
                        >
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
                <div className="top-navbar">
                  <ul className="pull-right">
                    <li>
                      <Link to="/wishlist">
                        <Image src={require("../../assets/images/wish.png")} />
                        &nbsp; Wish List
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart">
                        <Image src={require("../../assets/images/cart.png")} />
                        &nbsp; My Cart
                      </Link>
                    </li>
                    <li className="my-account">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                        <Image  src={require('../../assets/images/user.png')}/>    Hi, Admin
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <ul>
                                <li><Link to="/myaccount">My Account</Link></li>
                                <li><Link to="/myorders">My Orders</Link></li>
                                <li><Link to="/myaddress">My Addresses</Link></li>
                                <li><Link to="/">Logout</Link></li>
                            </ul>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <MegaMenu />
    </div>
  );
}
