import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
export default function ProductsCard() {
  return (
    <div>
      <div className="top-pick-card">
        <div className="top-pick-card-img">
          <div className="discount">
            <p>
              15% <br /> OFF
            </p>
          </div>
          <Link to="/details">
            <Image
              src={require("../../assets/images/product-img/proi.png")}
              className="img-responsive"
              alt="product image"
            />
          </Link>
          <div className="wish-icon">
            <Link to="/">
              <VscHeart />
            </Link>
          </div>
        </div>
        <Link to="/"> 
        <div className="price">
        <p> White Suit In Cotton Silk With Matching Net Dupatta</p>
          <h5> Rs.190 <del>Rs.260</del> <span className="off">(20% OFF)</span> </h5>
        </div>
        </Link>
      </div>
    </div>
  );
}
