import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Col, Modal, Button, Carousel } from "antd";
import fav from "../../../image/cmdty/detail/ico-fob-heart.png";
import favActive from "../../../image/cmdty/detail/ico-fob-heart-active.png";
import Slider, { Link } from "../shared/slider";
import IntlMessages from "../../../components/utility/intlMessages";

const PictureCol = styled(Col)`
  max-height: 700px;
  position: relative;
`;

const FavImg = styled.img`
  position: absolute;
  bottom: -40px;
  right: 20px;
  height: 65px;
  width: 65px;
  z-index: 10;
  cursor: pointer;
`;

const ShowItemList = styled.a`
  position: absolute;
  bottom: 16px;
  left: 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 16px;
    li{
      & button{
        :before{
          font-size: 12px;
          color: #e8e8e7;
          opacity: 1;
        }
        :hover{
          color: #797979;
          opacity: 0.5;
        }
      }
    }
    .slick-active{
      & button{
      :before{
        color: #797979;
        opacity: 0.5;
      }
    }
    }
  }
`;

const FavImage = ({ favFlg, handleChangeFavFlg }) => {
  return (
    <span>
      <FavImg src={favFlg ? favActive : fav} onClick={handleChangeFavFlg} />
    </span>
  );
};

const DetailPicture = ({ favFlg, handleChangeFavFlg, images }) => {
  if (!images) {
    return null;
  }
  return (
    <PictureCol span={12}>
      <StyledSlider
        dots={true}
        infinite={true}
        slidesToScroll={1}
        slidesToShow={1}
        responsive={[]}
      >
        {images.map((productImage, index) => {
          return <img key={index} src={productImage.url} />;
        })}
      </StyledSlider>
      <ShowItemList onClick={this.showModal}>
        <IntlMessages id="productDetail.attentionItemList" />
      </ShowItemList>
      <FavImage favFlg={favFlg} handleChangeFavFlg={handleChangeFavFlg} />
    </PictureCol>
  );
};

export default DetailPicture;
