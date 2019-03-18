import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { OutlineButton } from "../../shared/form/button";
import { Link } from "../../shared/form/link";
import moment from "moment";

const CouponItem = styled.div`
  margin-top: 20px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
  width: 100%;
  overflow: hidden;
`;

const ImageTitle = styled.p`
  color: #999;
  font-size: 11px;
  margin-bottom: 0px;
`;

const CouponImage = styled.img`
  width: 100%;
`;

const CouponInfo = styled.div`
  padding: 16px;
`;

const CouponTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-size: 13px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const DescList = styled.dl`
  display: flex;
  margin: 0;
`;

const DescTerm = styled.dd`
  margin: 0;
`;

const ExternalTerm = styled.p`
  margin-top: 10px;
  font-size: 11px;
`;

const DetailButton = styled(OutlineButton)`
  margin-top: 16px;
`;

const CouponInfoItem = props => {
  const { label, desc } = props;
  return (
    <DescList>
      <dt>
        <IntlMessages id={label} />
      </dt>
      <DescTerm>{desc}</DescTerm>
    </DescList>
  );
};

const CouponDetail = ({ coupon }) => {
  const {
    giftImageUrl,
    giftName,
    giftStartDate,
    giftEndDate,
    giftDetailUrl,
    imageTitle,
    useNumber,
    objectText,
    externalCouponFlg,
    externalStoreObject,
    couponGlossary
  } = coupon;
  const startDate = moment(giftStartDate, "YYYYMMDD").format("YYYY/MM/DD");
  const endDate = moment(giftEndDate, "YYYYMMDD").format("YYYY/MM/DD");

  return (
    <CouponItem>
      <CouponImage src={giftImageUrl} />
      <CouponInfo>
        <ImageTitle>{imageTitle}</ImageTitle>
        <CouponTitle>{giftName}</CouponTitle>
        <CouponInfoItem
          label={"coupon.period.label"}
          desc={`${startDate}〜${endDate}`}
        />
        <CouponInfoItem label={"coupon.useNumber.label"} desc={useNumber} />
        <CouponInfoItem label={"coupon.object.label"} desc={objectText} />
        {externalCouponFlg === 1 && (
          <div>
            <ExternalTerm>
              <IntlMessages id="coupon.externalObject.label" />
              {externalStoreObject}
            </ExternalTerm>
            <ExternalTerm>{couponGlossary}</ExternalTerm>
          </div>
        )}
        {giftDetailUrl && (
          <DetailButton color={"#7f0019"} reverse={1}>
            <Link to={giftDetailUrl}>
              <IntlMessages id="coupon.detail.button" />
            </Link>
          </DetailButton>
        )}
      </CouponInfo>
    </CouponItem>
  );
};

export default CouponDetail;
