import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import StockItemImg1 from "../../../../image/product_detail/img-stock-item1.png";
import { Row, Col } from "antd";

const StyledItemDetail = styled.div`
  padding: 10px;
  border-top: 1px solid rgb(153, 153, 153);
  border-bottom: 1px solid rgb(153, 153, 153);
  overflow: hidden;
  position: relative;

  img.item-image {
    width: 100%;
  }
`;

const ItemData = styled.p`
  margin-bottom: 4px;
  font-size: 11px;
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
  bottom: 6px;
  right: 6px;
  font-size: 11px;
`;

const images = {
  itemImg: StockItemImg1
};

const ItemDetail = ({ itemData }) => {
  return (
    <StyledItemDetail>
      <Row type="flex">
        <Col span={8}>
          <img className="item-image" src={images[itemData.item_img]} />
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
          <TotalPrice>
            <IntlMessages
              id="productDetail.priceTaxIncluded"
              values={{
                price: <ItemPrice>{itemData.price}</ItemPrice>
              }}
            />
          </TotalPrice>
        </Col>
      </Row>
    </StyledItemDetail>
  );
};

export default ItemDetail;
