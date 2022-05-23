import React from 'react'
import { BsTruck } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

function FetursCard() {
  return (
    <div>
          <div className="icon-box-area space-pb--r70">
        <div className="container">
          <div className="no-gutters row">
            <div className="col-lg-3">
              <div className="icon-box icon-box--style1">
                <div className="icon-box__icon">
                  <BsTruck />
                </div>
                <div className="icon-box__content">
                  <h5>Free Delivery</h5>
                  <p>
                    If you are going to use of Lorem, you need to be sure there
                    anything
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon-box icon-box--style1">
                <div className="icon-box__icon">
                  <GiPayMoney />
                </div>
                <div className="icon-box__content">
                  <h5>30 Day Return</h5>
                  <p>
                    If you are going to use of Lorem, you need to be sure there
                    anything
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon-box icon-box--style1">
                <div className="icon-box__icon">
                  <MdSupportAgent />
                </div>
                <div className="icon-box__content">
                  <h5>27/4 Support</h5>
                  <p>
                    If you are going to use of Lorem, you need to be sure there
                    anything
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="icon-box icon-box--style1">
                <div className="icon-box__icon">
                  <GrMapLocation />
                </div>
                <div className="icon-box__content">
                  <h5>Pan India</h5>
                  <p>
                    If you are going to use of Lorem, you need to be sure there
                    anything
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FetursCard