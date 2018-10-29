import styled from 'styled-components';
import {Card} from 'antd';

export const PopularityRankingWrapper = styled.div`
  width: 100%;
  
  .ant-col-xs-8 {
    padding: 5px 10px;
  }   
`;

export const PopularityRankingTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  padding: 10px 10px 0;
`;

export const PopularityRankingCard = styled(Card)`
  .ant-card-body {
    padding: 10px 0; 
  }

  .ant-card-meta-title {
    width: 100%;
    font-size: 12px;
    font-weight: normal;
    color: #333;
    white-space: pre-wrap;
    text-decoration: underline;
  }
`;

export const  Badge = styled.span`
  position: absolute;
  left: 8px;
  top: 8px;
  min-width: 16px;
  min-height: 12px;
  border-radius: 50%;
  padding: 8px;
  line-height: 0.8;
  text-align: center;
  display: block;
  color: ${(props)=>props.color};
  background-color: ${(props)=>props.backgroundColor};
  font-size: 12px;
  font-weight: bold;
  font-family: sans-serif;
`;