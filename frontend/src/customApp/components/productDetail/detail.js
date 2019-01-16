import React from "react";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Price = styled.span`
  margin: 4px;
`;

const LargePrice = styled.span`
  margin: 4px;
  font-size: 14px;
`;

const Seal = styled.span`
  font-size: 13px;
  color: #7f0019;
`;

const SealPrice = styled.span`
  font-size: 18px;
  margin: 0 4px;
`;

const StyledIcon = styled(Icon)`
  margin: 0 4px;
`;

const Unable = styled.div`
  border: 1px solid #333;
  font-size: 10px;
  width: 100px;
  padding: 0.5px 1px;
  text-align: center;
  margin: 8px 0;
`;

const Span = styled.span`
  font-size: 10px;
`;

const LinkStyle = styled.span`
  margin-left: 24px;
`;

const Detail = () => {
  return (
    <DetailList>
      <li>
        <Unable>
          <IntlMessages id="productDetail.unableToAcceptStore" />
        </Unable>
      </li>
      <li>
        <strike>
          <Span>
            <IntlMessages id="productDetail.taxIncluded" />
            <LargePrice>2,903</LargePrice>
            <IntlMessages id="productDetail.yen" />
          </Span>
        </strike>
        <StyledIcon type="arrow-right" />
        <Seal>
          <IntlMessages id="productDetail.taxIncluded" />
          <SealPrice>1,495</SealPrice>
          <IntlMessages id="productDetail.yen" />
        </Seal>
      </li>
      <li>
        <Span>18/05/02</Span>
        <Span>AM09:30</Span>
      </li>
      <li>
        <Span>
          <IntlMessages id="productDetail.itemNumber" />
        </Span>
        <Span>02619589</Span>
      </li>
      <li>
        <IntlMessages id="productDetail.deliveryFee" />
        <Price>490</Price>
        <IntlMessages id="productDetail.yen" />
        <LinkStyle>
          <Link to="#">
            <IntlMessages id="productDetail.detail" />
          </Link>
        </LinkStyle>
      </li>
    </DetailList>
  );
};

export default Detail;
