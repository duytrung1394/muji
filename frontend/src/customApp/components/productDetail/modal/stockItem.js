import React, { Fragment } from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import StockItemImg1 from "../../../../image/product_detail/img-stock-item1.png";
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";

const StockListItem = styled.div`
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
  margin-bottom: 12px;
`;

const ItemType = styled.span`
  color: rgb(153, 153, 153);
`;

const FixedPrice = styled.span`
  color: rgb(153, 153, 153);
`;

const OverLine = styled.span`
  text-decoration: line-through;
`;

const ItemPrice = styled.span`
  font-size: 15px;
`;

const DiscountPrice = styled.span`
  color: rgb(139, 26, 39);
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

const StockItem = () => {
  return (
    <StockListItem>
      <StyledRow>
        <Col span={8}>
          <NavLink to="#" style={linkStyle}>
            {/* <ItemImage src={images[item.img]} /> */}
            <ItemImage src={StockItemImg1} />
          </NavLink>
        </Col>
        <Col span={15} offset={1}>
          <ItemData>
            {/* <ItemType>{item.type}</ItemType> */}
            <ItemType>オーガニッククコットン</ItemType>
          </ItemData>
          {/* <ItemName>{item.name}</ItemName> */}
          <ItemName>ミニ裏毛五分袖ワイドTシャツ</ItemName>
          <ItemData>
            <IntlMessages id="productDetail.color" />
            {/* {item.color} */}
            ライトグレー
          </ItemData>
          <ItemData>
            <IntlMessages id="productDetail.size" />
            {/* {item.size} */}
            s
          </ItemData>
          <ItemData>
            <IntlMessages id="productDetail.number" />
            {/* {item.number} */}
            1
          </ItemData>
        </Col>
      </StyledRow>
      <TotalPrice>
          <IntlMessages id="productDetail.texIn" />
          <ItemPrice>2,980</ItemPrice>
          {/* <ItemPrice>{item.price}</ItemPrice> */}
          <IntlMessages id="productDetail.yen" />
      </TotalPrice>
    </StockListItem>
  );
};

export default StockItem;

