import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Price from "./form/price";
import Color from "./form/color";
import Size from "./form/size";
import Info from "./form/info";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "../shared/form/link";
import Quantity from "../shared/form/quantity";
import { OutlineButton } from "../shared/form/button";
import cartIcon from "../../../image/cmdty/detail/ico-cart.png";

const DetailName = styled.p`
  color: #999;
  font-size: 17px;
  word-spacing: 0.45px;
  margin: 0;
`;

const ItemName = styled.h2`
  font-size: 19px;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 13px;
`;
const StoreJanCode = styled.li`
  font-size: 10px;
`;
const DistributionFee = styled.li`
  margin-top: 5px;
  span {
    font-size: 13px;
  }
`;

const StyledLink = styled(Link)`
  margin-left: 24px;

  &,
  &:hover,
  &:active,
  &:focus {
    color: #60b3fa;
  }
`;

const ButtonsBox = styled.div`
  width: 300px;
  margin: 24px auto 0;
`;

class Form extends Component {
  state = {
    entity: this.props.entity,
    currentColor: "",
    currentSize: "",
    min: 0,
    max: Infinity,
    quantity: 1
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.entity.quantity_data) {
      let { quantity, max, min } = nextProps.entity.quantity_data;
      this.setState({
        min: min,
        max: max,
        quantity: quantity < min ? min : quantity > max ? max : quantity
      });
    }
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

  changeQuantity = num => {
    this.setState({ quantity: num });
  };

  render() {
    const { entity } = this.props;
    if (
      !entity.material ||
      !entity.color_list ||
      !entity.size_list ||
      !entity.priceKindList ||
      !entity.distribution_fee
    ) {
      return null;
    }

    return (
      <Fragment>
        <DetailName>{entity.material}</DetailName>
        <ItemName>{entity.itemName}</ItemName>
        <Info description={entity.webCatalogDescription} />
        <DetailList>
          <Price price={entity.price} priceKindList={entity.priceKindList} />
          <StoreJanCode>
            <IntlMessages id="productDetail.itemNumber" />
            <span> {entity.storeJanCode}</span>
          </StoreJanCode>
          <DistributionFee>
            <IntlMessages id="productDetail.deliveryFee" />
            <span> {entity.distribution_fee}</span>
            <IntlMessages id="productDetail.yen" />
            <StyledLink to="#">
              <IntlMessages id="productDetail.detail" />
            </StyledLink>
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
          value={this.state.quantity}
          min={this.state.min}
          max={this.state.max}
          changeHandler={this.changeQuantity}
        />
        <ButtonsBox>
          <OutlineButton
            color="#7f0019"
            reverse="true"
            onClick={this.submit}
            icon={cartIcon}
          >
            <IntlMessages id="productDetail.cart" />
          </OutlineButton>
        </ButtonsBox>
      </Fragment>
    );
  }
}

export default Form;
