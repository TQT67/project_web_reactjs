import React from "react";
import "./HeaderSlider.scss";
import { sliderImgs } from "../../utils/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    centerMode: true,
    cssEase: "linear",
  };

  return (
    <div className="slider">
      <div className="container">
        <div className="slider-content overflow-x-hidden">
          <Slider {...settings}>
            <div className="slider-item">
              <img src={sliderImgs[0]} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[1]} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[2]} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[3]} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[4]} alt="" />
            </div>
            <div className="slider-item">
              <img src={sliderImgs[5]} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
