import styled from 'styled-components';
import {Card} from 'antd';

export const PopularityRankingWrapper = styled.div`
  width:100%;
  margin:auto 30px;

  .ant-row-flex{
      width:100%;
      height:100%;
      text-align:left;
  }

  .ant-row-flex-center{
      justify-content:normal;
  }

  .ant-col-4{
      padding:5px 10px;
      width:18%;
  }   
`;

export const PopularityRankingTitle = styled.h1`
  font-size:14px;
  font-weight:bold;

`;

const {Meta} = Card;

export const PopularityRankingMeta = styled(Meta)`
  .ant-card-meta{
    width:100%;
  }

  .ant-card-meta-title{
    font-size:14px;
    font-weight:normal;
    color:#333;
    white-space:pre-wrap;
    text-decoration: underline;
    font-size:12px;
    width:100%;
  }
`;

export const  Badge = styled.span`
  position: absolute;
  display:block;
  left: 18px;
  top:12px;
  color:${(props)=>props.color};
  background-color:${(props)=>props.backgroundColor};
  border-radius:50%;
  font-size: 12px;
  min-width: 10px;
  padding:8px;
  font-weight:bold;
  text-align:center;
  line-height:0.8;
`;