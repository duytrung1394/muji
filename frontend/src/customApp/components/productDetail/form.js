import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Col } from "antd";
import Price from "./form/price";
import Color from "./form/color";
import Size from "./form/size";
import Quantity from "./form/quantity";
import { CartButton, BuyNowButton } from "./form/buttons";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "../shared/form/link";

const DetailName = styled.p`
  color: #999;
  font-size: 17px;
  word-spacing: 0.45px;
  margin: 0;
`;

const ItemName = styled.h2`
  font-size: 19px;
`;

const SeeMore = styled.a`
  font-size: 12px;
`;

const DetailText = styled.p`
  font-size: 13px;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StoreJanCode = styled.li`
  span {
    font-size: 10px;
  }
`;
const DistributionFee = styled.li`
  margin-top: 5px;
  span {
    font-size: 15px;
  }
`;

const LinkStyle = styled.span`
  margin-left: 24px;
  color: #60b3fa;
  font-size: 13px;
`;

const ButtonsBox = styled.div`
  width: 300px;
  margin: 24px auto 0;
`;

const Info = ({ description }) => {
  const delimiter = "。";
  const descriptionLines = description.split(delimiter);
  return (
    <Fragment>
      <DetailText>
        {descriptionLines.map((line, index) => {
          return (
            <span key={index}>
              {line}
              {descriptionLines.length - 1 > index && delimiter}
              <br />
            </span>
          );
        })}
      </DetailText>
      <SeeMore>
        <IntlMessages id="rest.seeMore" />
      </SeeMore>
    </Fragment>
  );
};

class Form extends Component {
  state = {
    entity: this.props.entity,
    currentColor: "",
    currentSize: "",
    quantity: 0
  };

  updateEntity = (keyName, value) => {
    const entity = {
      ...this.state.entity,
      [keyName]: value
    };
    this.setState({ entity });
  };

  submit = () => {
    console.log("CartButton");
    //this.props.requestHandler();
  };

  requestHandler = () => {
    console.log("BuyNowButton");
    //this.props.requestHandler());
  };

  colorChange = color => {
    this.setState({
      currentColor: color
    });
  };

  sizeChange = size => {
    this.setState({
      currentSize: size
    });
  };

  addQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  minusQuantity = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
    null;
  };

  render() {
    const { entity } = this.props;

    if (
      !entity.material ||
      !entity.read_more_info ||
      !entity.color_list ||
      !entity.size_list ||
      !entity.priceKindList ||
      !entity.distribution_fee
    ) {
      return null;
    }

    return (
      <Col span={11} offset={1}>
        <DetailName>{entity.material}</DetailName>
        <ItemName>{entity.itemName}</ItemName>
        <Info description={entity.webCatalogDescription} />
        <DetailList>
          <Price price={entity.price} priceKindList={entity.priceKindList} />
          <StoreJanCode>
            <span>
              <IntlMessages id="productDetail.itemNumber" />
            </span>
            <span> {entity.storeJanCode}</span>
          </StoreJanCode>
          <DistributionFee>
            <IntlMessages id="productDetail.deliveryFee" />
            <span> {entity.distribution_fee}</span>
            <IntlMessages id="productDetail.yen" />
            <LinkStyle>
              <Link to="#">
                <IntlMessages id="productDetail.detail" />
              </Link>
            </LinkStyle>
          </DistributionFee>
        </DetailList>
        <Color
          select={entity.color_list_select}
          colorList={entity.color_list}
          colorChange={this.colorChange}
          currentColor={this.state.currentColor}
        />
        <Size
          select={entity.size_list_select}
          sizeList={entity.size_list}
          currentSize={this.state.currentSize}
          sizeChange={this.sizeChange}
        />
        <Quantity
          quantity={this.state.quantity}
          minusQuantity={this.minusQuantity}
          addQuantity={this.addQuantity}
        />
        <ButtonsBox>
          <CartButton onClick={this.submit} />
          <BuyNowButton onClick={this.requestHandler} />
        </ButtonsBox>
      </Col>
    );
  }
}

export default Form;
