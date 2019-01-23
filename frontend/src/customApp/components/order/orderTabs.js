import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StoreReserveItemList from "./storeReserve/itemList";
import IntlMessages from "../../../components/utility/intlMessages";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SliderTabs = styled.ul`
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
        &:hover {
          color: rgba(0, 0, 0, 0.65);
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

const OrderTabs = ({ itemList, tabList }) => {
  const defaultSettings = {
    dots: true,
    appendDots: dots => <SliderTabs>{dots}</SliderTabs>,
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
    <SliderWrapper {...defaultSettings}>
      {itemList.map((item, index) => {
        return <StoreReserveItemList itemList={item} key={index} />;
      })}
    </SliderWrapper>
  );
};

export default OrderTabs;
