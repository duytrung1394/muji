import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Col, Modal, Button, Carousel } from "antd";
import fab from "../../../image/cmdty/detail/ico-fob-heart.png";
import fabActive from "../../../image/cmdty/detail/ico-fob-heart-active.png";
import Slider, { Link } from "../slider";
import IntlMessages from "../../../components/utility/intlMessages";

const PictureCol = styled(Col)`
  max-height: 700px;
  position: relative;
`;

const FabImg = styled.img`
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
  bottom: -30px;
  left: 10px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    & button {
      color: #fff;
    }
  }
`;

const FabImage = ({ fabFlg, changeFlg }) => {
  console.log(fabFlg);
  console.log(changeFlg);
  return (
    <span>
      {fabFlg ? (
        <FabImg src={fab} onClick={changeFlg} />
      ) : (
        <FabImg src={fabActive} onClick={changeFlg} />
      )}
    </span>
  );
};

class DetailPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fabFlg: false
    };
    this.changeFlg = this.changeFlg.bind(this);
  }

  changeFlg() {
    this.setState(() => {
      return { fabFlg: (this.state.fabFlg = !this.state.fabFlg) };
    });
  }

  render() {
    const { productImages } = this.props;
    if (!productImages) {
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
          {productImages.map((productImage, index) => {
            return <img key={index} src={productImage.url} />;
          })}
        </StyledSlider>
        <ShowItemList onClick={this.showModal}>
          <IntlMessages id="productDetail.attentionItemList" />
        </ShowItemList>
        <FabImage fabFlg={this.state.fabFlg} changeFlg={this.changeFlg} />
      </PictureCol>
    );
  }
}

export default DetailPicture;
