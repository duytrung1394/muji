import styled from "styled-components";
import { Card, Col } from "antd";

export const NetStoreWrapper = styled.div`
  width: 100%;
  margin: 10px 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  transition: filter 0.2s ease;
  filter: brightness(1);

  &:hover {
    filter: brightness(0.85);
  }

  .ant-row-flex {
    padding: 15px 0;
  }
`

export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  padding: 20px 0;
  margin: 0;
`;

export const StyledServiceTitle = styled.div`
  color: #7f0019;
  font-size: 13px;
  font-weight: bold;

  span {
    display: block;

    &.emphasis {
      font-size: 18px;
    }    
  }
`;

export const StyledService = styled(Col)`
  max-width: 200px;

  .ant-card {
    width: 90%;
    margin: 0 auto !important;
    font-family: none !important;

    .ant-card-cover {
      width: 60%;
      max-width: 100px;
      margin: 0 auto;
      padding-bottom: 13px;
    }

    .ant-card-body {
      padding: 0;

      .ant-card-meta {
        margin: 0;

        .ant-card-meta-title {
          font-weight: bold;
          font-size: large !important;
          color: #7f0019 !important;
        }

        .ant-card-meta-description {
          font-size: 10px !important;
          color: #333 !important;
          font-weight: 400;
        }
      }
    }
  }
`;
