import React, { Fragment } from "react";
import styled from "styled-components";
import fav from "../../../image/cmdty/detail/ico-fob-heart.png";
import favActive from "../../../image/cmdty/detail/ico-fob-heart-active.png";
import Slider from "../shared/slider";
import IntlMessages from "../../../components/utility/intlMessages";

const FavImg = styled.img`
  position: absolute;
  bottom: -32px;
  right: 20px;
  height: 65px;
  width: 65px;
  z-index: 10;
  cursor: pointer;
`;

const ShowItemList = styled.a`
  position: absolute;
  bottom: -30px;
  left: 0;
  font-weight: bold;

  &,
  &:hover,
  &:active,
  &:focus {
    color: #60b3fa;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 16px;
    li {
      & button {
        :before {
          font-size: 12px;
          color: #e8e8e7;
          opacity: 1;
        }
        :hover {
          color: #797979;
          opacity: 0.5;
        }
      }
    }
    .slick-active {
      & button {
        :before {
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
    <Fragment>
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
    </Fragment>
  );
};

export default DetailPicture;
