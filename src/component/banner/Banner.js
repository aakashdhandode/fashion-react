import React from 'react'
import { Image } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './banner.css'

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <section className="main-slider">
        <Slider {...settings}>
          <div className="banner-slider">
            <div className="banner-img">
              <Image src={require('../../assets/images/slider1.jpg')} />
            </div>
          </div>
          <div className="banner-slider">
            <div className="banner-img">
              <Image src={require('../../assets/images/slider2.jpg')} />
            </div>
          </div>
        </Slider>
      </section>
    </div>
  )
}

export default Banner

