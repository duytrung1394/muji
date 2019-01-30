import React, { Fragment } from "react";
import { Icon } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import moment from "moment";

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
  width: fit-content;
  padding: 2px 5px;
  text-align: center;
  margin: 8px 0;
`;

const Span = styled.span`
  margin-top: 3px;
  font-size: 10px;
`;

const Detail = ({ price, priceKindList }) => {
  let startDate = null;
  if (priceKindList.length > 0 && priceKindList[0].bannerInfo) {
    startDate = priceKindList[0].bannerInfo.startDate;
  }
  const startDateTime =
    startDate && startDate.length == 12
      ? moment(startDate.substr(0, 8) + "T" + startDate.substr(8))
      : null;
  return (
    <Fragment>
      <li>
        <Unable>
          <IntlMessages id="productDetail.unableToAcceptStore" />
        </Unable>
      </li>
      {price.oldPrices ? (
        <li>
          <strike>
            <Span>
              <IntlMessages id="rest.taxIncluded" />
              <LargePrice>
                {price.oldPrices[0].oldPrice.toLocaleString()}
              </LargePrice>
              <IntlMessages id="productDetail.yen" />
            </Span>
          </strike>
          <StyledIcon type="arrow-right" />
          <Seal>
            <IntlMessages id="rest.taxIncluded" />
            <SealPrice>{price.basicPrice.toLocaleString()}</SealPrice>
            <IntlMessages id="rest.priceCurrency" />
          </Seal>
        </li>
      ) : (
        <li>
          <IntlMessages id="rest.taxIncluded" />
          <SealPrice>{price.basicPrice}</SealPrice>
          <IntlMessages id="rest.priceCurrency" />
        </li>
      )}
      <li>
        <Span>{startDateTime && startDateTime.format("YY/MM/DD")}</Span>
        <Span> {startDateTime && startDateTime.format("AHH:mm")}</Span>
      </li>
    </Fragment>
  );
};

export default Detail;
