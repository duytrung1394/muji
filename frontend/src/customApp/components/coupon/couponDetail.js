import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { OutlineButton } from "../shared/form/button";
import { Link } from "../shared/form/link";
import moment from "moment";

const ListItem = styled.li`
  width: 100%;
  margin-top: 20px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
  overflow: hidden;
  list-style-type: none;
  position: relative;

  @media screen and (min-width: 769px) {
    width: 48%;
  }
`;

const CouponImageBoundary = styled.p`
  margin: 0;
  padding: 0;
`;

const CouponImage = styled.img`
  width: 100%;
`;

const CouponInfo = styled.div`
  padding: 16px;
`;

const CouponTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  white-space: normal;
  overflow: hidden;
  font-size: 13px;
`;

const DescList = styled.dl`
  display: flex;
  margin: 0;
  padding: 0;

  &:nth-child(2) {
    margin-top: 10px;
  }
`;

const DefineTerm = styled.dt`
  margin: 0;
  padding: 0;
`;

const DescTerm = styled.dd`
  margin: 0;
  padding: 0;
`;

const ExternalTerm = styled.p`
  margin-top: 10px;
  font-size: 11px;
`;

const BoundaryButton = styled.div`
  height: 60px;
`;

const CouponDetailButtonStyled = styled(OutlineButton)`
  background-color: #7f0019 !important;
  border: 1px solid #7f0019 !important;
  color: #fff !important;
  display: block !important;
  margin: auto;
  margin-bottom: 20px;
  position: absolute !important;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CouponDetail = ({ coupon }) => {
  const {
    giftImageUrl,
    giftName,
    giftStartDate,
    giftEndDate,
    giftDetailUrl
  } = coupon;
  const startDate = moment(giftStartDate, "YYYYMMDD").format("YYYY/MM/DD");
  const endDate = moment(giftEndDate, "YYYYMMDD").format("YYYY/MM/DD");

  return (
    <ListItem>
      <CouponImageBoundary>
        <CouponImage src={giftImageUrl} />
      </CouponImageBoundary>
      <CouponInfo>
        <CouponTitle>{giftName}</CouponTitle>
        <DescList>
          <DefineTerm>
            <IntlMessages id="coupon.period.label" />
          </DefineTerm>
          <DescTerm>
            {startDate}〜{endDate}
          </DescTerm>
        </DescList>
        <DescList>
          <DefineTerm>
            <IntlMessages id="coupon.useNumber.label" />
          </DefineTerm>
        </DescList>
        <DescList>
          <DefineTerm>
            <IntlMessages id="coupon.object.label" />
          </DefineTerm>
        </DescList>
        <ExternalTerm>
          <IntlMessages id="coupon.externalObject.label" />
        </ExternalTerm>
      </CouponInfo>
      {giftDetailUrl && (
        <BoundaryButton>
          <CouponDetailButtonStyled className="ant-btn-primary">
            <Link to={giftDetailUrl}>
              <IntlMessages id="coupon.detail.button" />
            </Link>
          </CouponDetailButtonStyled>
        </BoundaryButton>
      )}
    </ListItem>
  );
};

export default CouponDetail;
