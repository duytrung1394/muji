import React from "react";
import styled from "styled-components";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "./link";

const SliderWrapper = styled(SlickSlider)`
  .slick-track {
    display: flex;
  }
  .slick-slide {
    height: inherit;
  }
`;

const defaultSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

const Slider = props => {
  return (
    <SliderWrapper {...defaultSettings} {...props}>
      {props.children}
    </SliderWrapper>
  );
};

export default Slider;

export { defaultSettings, Link };
