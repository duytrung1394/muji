import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import StockItemImg1 from "../../../../image/product_detail/img-stock-item1.png";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const StockItemDetail = styled.div`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
  overflow: hidden;
  position: relative;
`;

const ItemImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ItemData = styled.p`
  margin-bottom: 4px;
  font-size: 11px;
`;

const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
`;

const ItemName = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
`;

const ItemType = styled.span`
  color: rgb(153, 153, 153);
`;

const ItemPrice = styled.span`
  font-size: 16px;
  padding: 0 6px;
`;

const TotalPrice = styled.span`
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 11px;
`;

const linkStyle = {
  display: "block"
};

const images = {
  itemImg: StockItemImg1
};

const ItemDetail = ({ itemData }) => {
  return (
    <StockItemDetail>
      <StyledRow>
        <Col span={8}>
          <NavLink to="#" style={linkStyle}>
            <ItemImage src={images[itemData.item_img]} />
          </NavLink>
        </Col>
        <Col span={15} offset={1}>
          <ItemData>
            <ItemType>{itemData.type}</ItemType>
          </ItemData>
          <ItemName>{itemData.name}</ItemName>
          <ItemData>
            <IntlMessages id="productDetail.color" />
            {itemData.color}
          </ItemData>
          <ItemData>
            <IntlMessages id="productDetail.size" />
            {itemData.size}
          </ItemData>
          <ItemData>
            <IntlMessages id="productDetail.number" />
            {itemData.number}
          </ItemData>
        </Col>
      </StyledRow>
      <TotalPrice>
        <IntlMessages id="productDetail.texIn" />
        <ItemPrice>{itemData.price}</ItemPrice>
        <IntlMessages id="productDetail.yen" />
      </TotalPrice>
    </StockItemDetail>
  );
};

export default ItemDetail;
