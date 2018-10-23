import styled from "styled-components";
import { Row,Card } from "antd";

export const StyledRow = styled(Row)`
  padding: 0px;
  margin: 0px;
`

export const StyledCard = styled(Card)`
  font-size:12px;



  margin: 30px;
  width: 258px;

  .ant-card-cover{
    display:flex;
    flex-flow: row wrap;
    margin-bottom:50px;
    padding-left:0px;
    justify-content: space-around;
  }

  .ant-card-meta-title{
    text-overflow: visible;
    overflow: visible;
    white-space: normal;
  }
`

export const FromMujiSection= styled.div`
  background-color:#f4f4f4;
  padding-bottom:60px;`

export const FromMujiTitle = styled.h1`
  font-size:24px;
  padding: 70px 0 20px 50px;
  font-weight: normal;
`


export const NewCard= styled.span`
    font-size: 11px;
    display:block;
    position:absolute;
    top:0px;
    right:0px;
    font-weight:bold;
    background-color:rgba(120, 0, 0, 0.4);
    padding:1.5px 4px;
    border-radius:0 4px 0 4px;
    color:white;
`

export const LoadMore = styled.p`
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    width: 100%;
    color: #585858;
    display: block;
    text-align: center;
    padding: 18px 0;
    font-size: 18px;
    margin: 0 auto;
    max-width: 500px;
    cursor: pointer;
    background-color:#f4f4f4;
    user-select:none;
`
