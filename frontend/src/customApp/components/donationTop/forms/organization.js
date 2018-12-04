import React from "react";
import styled from "styled-components";
import { Row, Col, Card, Button } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledRow = styled(Row)`
  margin-bottom: 55px;

  .ant-card-bordered {
    border: none;
  }

  .ant-card-head-title {
    font-size: 19px;
    margin-bottom: 15px;
    padding: 0 40px;
  }

  .ant-card-meta-title {
    font-size: 17px;
    color: #333;
  }

  .ant-card-meta-description {
    font-size: 14px;
    color: #333;
  }

  .ant-card-body {
    margin-bottom: 15px;
    padding: 0;
  }
`;

const StyledCol = styled(Col)`
  width: 50%;
  padding: 0 40px;
`;

const { Meta } = Card;

const Div = styled.div`
  text-align: right;
  margin-top: 15px;

  button {
    font-size: 12px;
    color: #191919;
    font-weight: bold;
    border-radius: 0;
  }

  button:hover {
    border: 1px solid #7f0019;
    color: #191919;
  }
`;

const Organization = ({ organizations, title }) => {
  if (organizations) {
    return (
      <StyledRow type="flex">
        {organizations.map((organization, index) => {
          return (
            <StyledCol key={index}>
              <Card
                title={organization.title}
                cover={<img src={organization.img} />}
              />
              <Meta title={title} description={organization.description} />
              <Div>
                <a href="https://ryohin-keikaku.jp/csr/donation/dialog_052-01.html">
                  <Button icon="caret-right">
                    <IntlMessages id="donationTop.employeeTalk" />
                  </Button>
                </a>
              </Div>
            </StyledCol>
          );
        })}
      </StyledRow>
    );
  } else return null;
};

export default Organization;
