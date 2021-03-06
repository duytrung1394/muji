import React, { Component } from "react";
import styled from "styled-components";
import { Col, Card, Popover, Row } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";
import { BaseContentLayout } from "../../shared/panel/contentLayout";

const ContentLayout = styled(BaseContentLayout)`
  border: 1px solid #ddd;
  background: #f7f7f7;

  h2 {
    color: #333;
    font-size: 14px;
    margin-bottom: 15px;
  }

  .ant-card-head {
    background: #f7f7f7;
    border: none;
    padding: 0;
    min-height: 35px;
  }

  .ant-card-head-title {
    font-size: 12px;
    font-weight: bold;
    border-top: 1px solid #ddd;
    margin: 0;
    padding: 5px 0 0 0;
  }

  .ant-card {
    background: #f7f7f7;
    border: none;
    font-size: 11px;
    padding-bottom: 20px;
  }

  .ant-card-body {
    padding: 0;
  }
`;

const StyledA = styled.a`
  font-size: 11px;
  color: #67affd;
`;

const StyledCol = styled(Col)`
  width: 33%;
  padding: 0 15px 0 0;
`;

const StyledRow = styled(Row)`
  margin: auto;
`;

const OutsideDiv = styled.div`
  margin: 10px 150px;
`;

const InsideDiv = styled.div`
  width: 115%;
`;

const Guide = () => {
  return (
    <ContentLayout>
      <OutsideDiv>
        <h2>
          <IntlMessages id="donation.userGuide" />
        </h2>
        <InsideDiv>
          <StyledRow type="flex" justify="center">
            <StyledCol>
              <Card title={<IntlMessages id="donation.paymentMethod" />}>
                <IntlMessages id="donation.paymentMethodContent" />
              </Card>
            </StyledCol>
            <StyledCol>
              <Card title={<IntlMessages id="donation.change" />}>
                <IntlMessages id="donation.donationCancel" />
              </Card>
            </StyledCol>
            <StyledCol>
              <Card title={<IntlMessages id="donation.taxExemptions" />}>
                <IntlMessages id="donation.taxExemptionsCertificate" />
              </Card>
            </StyledCol>
          </StyledRow>
        </InsideDiv>
        <Popover trigger="click">
          <StyledA>
            <IntlMessages id="donation.fundRaisingTickets" />
          </StyledA>
        </Popover>
      </OutsideDiv>
    </ContentLayout>
  );
};

export default Guide;
