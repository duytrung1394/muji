import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Card } from "antd";

const StyledRow = styled(Row)`
  margin-bottom: 55px;
`;

const StyledCol = styled(Col)`
  width: 25%;
  padding: 0 20px;
  margin-bottom: 20px;

  .ant-card-bordered {
    border: none;
  }

  .ant-card-meta-title {
    font-size: 17px;
  }

  .ant-card-meta-description {
    color: #333;
  }

  .ant-card-body {
    padding: 0;
    margin-bottom: 15px;
  }
`;

const { Meta } = Card;

const Activity = ({ activities }) => {
  if (activities) {
    return (
      <StyledRow type="flex">
        {activities.map((activity, index) => {
          return (
            <StyledCol key={index}>
              <Card cover={<img src={activity.img} />} />
              <Meta title={activity.title} description={activity.description} />
            </StyledCol>
          );
        })}
      </StyledRow>
    );
  } else return null;
};

export default Activity;
