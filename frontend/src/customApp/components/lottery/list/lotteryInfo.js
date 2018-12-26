import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";

const LotteryItem = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const InfoImg = styled.img`
  display: block;
  padding-top: 40px;
`;

const Info = styled.div`
  font-size: 14px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InfoItem = styled.li`
  display: flex;
`;

const InfoItemTitle = styled.p`
  width: 30%;
  text-align: right;
  font-weight: bold;
`;

const InfoText = styled.p`
  width: 70%;
  text-align: left;
  padding-left: 4px;
`;

const LotteryInfo = ({ infoData }) => {
  if (infoData) {
    return (
      <LotteryItem>
        <div>
          <InfoImg src="http://img.muji.net/img/store/lucky/L101220_1.jpg" />
        </div>
        <Info>
          <h2>{infoData.title}</h2>
          <p>{infoData.description}</p>
          <InfoList>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.receptionPeriod" />
              </InfoItemTitle>
              <InfoText>{infoData.reception_period}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.lotteryPresentation" />
              </InfoItemTitle>
              <InfoText>{infoData.lettery_presentation}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.deliveryDate" />
              </InfoItemTitle>
              <InfoText>{infoData.delivery_date}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.receivingPeriod" />
              </InfoItemTitle>
              <InfoText>{infoData.receiveing_period}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.paymentMethod" />
              </InfoItemTitle>
              <InfoText>{infoData.payment_method}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.shippingFee" />
              </InfoItemTitle>
              <InfoText>{infoData.shipping_fee}</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoItemTitle>
                <IntlMessages id="lottery.frequentlyQuestions" />
              </InfoItemTitle>
              <InfoText>
                <NavLink to="lotteries" style={{ textDecoration: "underline" }}>
                  {infoData.frequently_questions}
                </NavLink>
              </InfoText>
            </InfoItem>
          </InfoList>
        </Info>
      </LotteryItem>
    );
  }
  return null;
};

export default LotteryInfo;
