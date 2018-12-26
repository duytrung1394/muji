import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../panel/contentLayout";

const ContentLayout = styled(BaseContentLayout)`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;

  span{
    &:nth-child(3){
    margin-right: 40px;
  }
  &:nth-child(6){
    margin-right: 20px;
  }
`;

const TotalDonationSpan = styled.span`
  font-size: 19px;
  font-weight: bold;
`;

const StyledTotalDonationSpan = styled.span`
  font-size: 11px;
  vertical-align: bottom;
`;

const Summary = ({ total, total_people }) => {
  return (
    <ContentLayout>
      <IntlMessages id="donationShow.total" />
      <TotalDonationSpan>{total}</TotalDonationSpan>
      <IntlMessages id="donationShow.yen" />

      <IntlMessages id="donationShow.donationPeople" />
      <TotalDonationSpan>{total_people}</TotalDonationSpan>
      <IntlMessages id="donationShow.people" />
      <StyledTotalDonationSpan>
        <IntlMessages id="donationShow.current" values={{ time: 16 }} />
      </StyledTotalDonationSpan>
    </ContentLayout>
  );
};

export default Summary;
