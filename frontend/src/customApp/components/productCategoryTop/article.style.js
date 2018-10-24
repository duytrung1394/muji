import styled from "styled-components";
import { Col } from "antd";

export const CategoryTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px 20px;
`;

export const CategoryName = styled.h2`
  font-size: 36px;
  margin-bottom:4%;
  font-family: serif;
  font-weight:normal;
  color: rgba(0, 0, 0, 0.8);
  z-index:2;

  @media screen and (max-width:1300px) {
    font-size:32px;
    position:absolute;
    top:-26vh;
    left:2vh;
  }

  @media only screen and (max-width: 768px) {
    font-size:22px;  
    top:20vh;
}

  @media only screen and (max-width: 475px) {
    position:static;
    margin:0;
    padding:10px 0;
  }
`;

export const ContentWrapper = styled.div`

    font-size: 14px;
    background: linear-gradient(#fafafa, #f6f6f6);
    width: 100%;
    max-width: 1540px;
    margin: 0 auto 0px;
    overflow:hidden;
`;

export const CategoryDiscription = styled.p`
  font-size: 16px;
  font-family: serif;
  line-height: 2.1;
  color: rgba(0, 0, 0, 0.6);

  @media only screen and (max-width: 475px) {
    font-size:14px;
    line:height:1.5;
  }
`;

export const CategoryDiscriptionWrapper = styled(Col)`
  @media screen and (max-width:1300px) {
    clear:both;
  }
`;

export const FigureWrapper = styled(Col)` 
  @media only screen and (max-width: 475px) {
    margin-bottom:15px;
  }
`;

export const ArticleWrapper = styled.div`
  margin-bottom:30px;

.ant-col-xl-14{
    padding: 30px 80px 0 30px;
  }

  .ant-col-10 {
    float:right;
  }

  .ant-list-split .ant-list-item {
    border:none;
  }

  .promotion-figure {
    margin:0;
  }

  .promotion-img {
    width:100%;
    height:auto;
    min-height: 100%;
    max-width: 1440px;
    z-index:1;
  }

  @media screen and (max-width:1300px) {
    .ant-col-xl-14 {
      padding: 10px 80px 0 30px;
      width:100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .ant-col-10 {
      width:60%;
    }
    .promotion-img {
      position: visible;
      top: 0;
      right: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .ant-col-md-14 {
      position:absolute;
      top:80;
      padding-left:15px;
    }
    .ant-list-item-meta-title {
      font-size:12px;
      line-height:1.5;
      font-weight:400;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  @media only screen and (max-width: 475px) {
    .ant-col-md-14 {
      position:static;
    }
    .ant-col-10 {
      width:100%;
    }
    .ant-col-xl-14 {
      padding:0 14px;
    }
  }
`;
