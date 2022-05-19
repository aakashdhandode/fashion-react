import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function CartSummery() {
  return (
    <div>
      <div className="cart-summery">
        <h5>CART SUMMARY</h5>
        <div className="table-responsive mt-20">
          <ul>
            <li>
              Subtotal <span className="pull-right">Rs. 2,399</span>
            </li>
            <li>
              Shipping(FREE-Blue Dart){" "}
              <span className="pull-right">Rs. 00</span>
            </li>
            {/* <li className="promo-code">
                                    NEW20 <span className="pull-right">-Rs.120</span> <br /> <a href="" className="remove">Remove</a>
                                </li> */}
            <div className="divider"></div>
            <li>
              <b>Grand Total</b> <span className="pull-right">Rs. 2,399</span>
            </li>
            <br />
            <input
              type="submit"
              className="btn-cart btn-block"
              value="checkout"
            />
            <li className="text-center">
              By clicking on checkout you are agreeing to{" "}
              <a href="" className="edit">
                Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="pro-code mt-20 text-center">
                        <h3>2 PROMO CODES AVAILABLE</h3>
                    </div> */}
      <div className="cart-summery-extra mt-3">
        <p>
          <b>WE ACCEPT</b>
        </p>
        <Image src={require('../../assets/images/payments.png')} className="" alt="product image" />
        <p>Secure transactions are carried by our payment gateway partner.</p>
      </div>
    </div>
  );
}

export default CartSummery;
