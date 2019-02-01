import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

const SliderWrapper = styled(SlickSlider)`
  && {
    display: flex;
    flex-direction: column;
  }

  & .slick-slide {
    height: auto;
    margin-bottom: 20px;
  }
`;

const Tabs = styled.ul`
  && {
    display: flex;
    flex-direction: row;
    position: static;
    order: -1;
    margin: 20px auto 0 auto;
    padding: 0 50px;
    background-color: rgba(0, 0, 0, 0.05);
    font-size: 12px;

    & > * {
      width: 100%;
      height: auto;

      a {
        display: block;
        padding: 10px 5px;
        vertical-align: middle;

        &,
        &:hover,
        &:focus {
          color: rgba(0, 0, 0, 0.65);
          text-decoration: none;
        }
      }
    }

    .slick-active {
      border-bottom: solid 2px rgb(127, 0, 25);
      a,
      a:hover {
        color: rgb(127, 0, 25);
      }
    }
  }
`;

export const TabSlider = props => {
  const { tabList, children } = props;
  const defaultSettings = {
    dots: true,
    appendDots: dots => <Tabs>{dots}</Tabs>,
    customPaging: i => (
      <Link to={"#"} key={i}>
        <IntlMessages id={tabList[i]} />
      </Link>
    ),
    infinite: false,
    speed: 500,
    initialSlide: 0
  };

  return (
    <SliderWrapper {...defaultSettings} {...props}>
      {children &&
        children.map((child, index) => {
          return (
            <div key={index}>
              {child.props.children && child.props.children}
            </div>
          );
        })}
    </SliderWrapper>
  );
};

export const TabPanel = styled.div`
  & {
    float: left;
    list-style: none;
    position: relative;
    width: 100%;

    max-width: 1590px;
    margin: 10px auto 0;
    padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    a,
    a:hover,
    a:focus {
      text-decoration: none;
    }

    div + & {
      margin-top: 0;
    }
  }
`;
