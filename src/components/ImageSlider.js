import React from 'react';
import Slider from "react-slick";
import './image-slider.css'

import fighterA from '../assets/images/fighter.png'
import fighterB from '../assets/images/fighter-2.png'

const ImageSlider = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return <Slider {...settings} className="slider-wrapper">
    <div className="slick-slide">
      <div className="slick-slide-wrapper">
        <div className="card-red-corner">
          <img className="card-img" src={fighterA} alt=""/>
        </div>
        <div className="card-blue-corner">
          <img className="card-img" src={fighterB} alt=""/>
        </div>
      </div>
    </div>
    <div className="slick-slide">
      <div className="slick-slide-wrapper">
        <div className="card-red-corner">
          <img className="card-img" src={fighterA} alt=""/>
        </div>
        <div className="card-blue-corner">
          <img className="card-img" src={fighterB} alt=""/>
        </div>
      </div>
    </div>
  </Slider>
};

export default ImageSlider;
