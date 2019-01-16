import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Col, Modal, Button } from "antd";
import fab from "../../../image/cmdty/detail/ico-fob-heart.png";
import fabActive from "../../../image/cmdty/detail/ico-fob-heart-active.png";
import Slider, { Link } from "../slider";

// const PictureCol = styled(Col)`
//   max-height: 700px;
//   overflow: hidden;
//   position: relative;
// `;

const Img = styled.img`
  max-width: 100%;
  display: block;
`;

const FabImg = styled.img`
  position: absolute;
  bottom: -40px;
  right: 20px;
  height: 65px;
  width: 65px;
  z-index: 10;
`;

const Dots = styled.ul`
  list-style: none;
  display: flex;
  position: absolute;
  bottom: 16px;
  left: 30%;
`;

const Dot = styled.li`
  border-radius: 50%;
  background-color: #fff;
  height: 12px;
  width: 12px;
  margin: 0 4px;
  border: 0.5px solid #eee;
`;

const PageLink = styled.a`
  display: block;
`;

const ShowItemList = styled.a`
  position: absolute;
  bottom: 15px;
  left: 10px;
`;

const ProductImageItemStyle = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px;
  height: 375px;
  width: 375px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 #585858;

  .product-image {
    border-radius: 4px 4px 0 0;
    width: 100%;
  }
`;


const ProductImageItem = ({ productImage }) => {
  return (
    <ProductImageItemStyle>
      <StyledLink to="">
        <img className="product-image" src={productImage} />
      </StyledLink>
    </ProductImageItemStyle>
  );
};

const FabImage = () => {
  let fabFlg = false;
  return (
    <span>{fabFlg ? <FabImg src={fab} /> : <FabImg src={fabActive} />}</span>
  );
};

const customSliderSettings = {};

const DetailPicture = ({ productImages }) => {
  if (!productImages) {
    return null;
  }

  return (
    <Fragment>
    {/* <PictureCol span={24}> */}
      {/* {imgUrl.map((url, index) => {
        return <Img key={index} src={url} />;
      })} */}
      {/* <Dots>
        {imgUrl.map((url, index) => {
          return (
            <Dot key={index}>
              <PageLink />
            </Dot>
          );
        })}
      </Dots> */}
      <Slider {...customSliderSettings}>
        {productImages.map((productImage, index) => {
          return (<ProductImageItem key={index} productImage={productImage.url} />);
        })}
      </Slider>
      <ShowItemList onClick={this.showModal}>着目商品リスト</ShowItemList>
      <FabImage />
    {/* </PictureCol> */}
    </Fragment>
  );
};

export default DetailPicture;
