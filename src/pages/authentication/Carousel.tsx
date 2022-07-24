import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../style/carousel.css"
const LoginCarousel = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    fade: true,
    dotsClass: "slick-dots ",
  };


  return (
    <Slider
    {...settings}
    >
      <div className="carousel-image">
        <img src="/images/1.jpg"    />
      </div>
      <div className="carousel-image">
        <img src="/images/2.jpg"    />
      </div>
      <div className="carousel-image">
        <img src="/images/3.jpg"    />
      </div>
    </Slider>
  );
};

export default LoginCarousel;
