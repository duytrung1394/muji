import styled from 'styled-components';
import {Card} from 'antd';

export const PopularityRankingWrapper = styled.div`
  width: calc(100% - 60px);
  
  .ant-col-xs-8{
    padding:5px 10px;
  }   
`;

export const PopularityRankingTitle = styled.h1`
  font-size:14px;
  font-weight:bold;
  padding:10px 10px 0;
`;

export const PopularityRankingCard = styled(Card)`
  .ant-card-body{
    padding:10px 0; 
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
  left: 8px;
  top:8px;
  color:${(props)=>props.color};
  background-color:${(props)=>props.backgroundColor};
  border-radius:50%;
  font-size: 12px;
  min-width: 16px;
  min-height:12px;
  padding:8px;
  font-weight:bold;
  text-align:center;
  line-height:0.8;
  font-family: sans-serif;
`;