import styled from "styled-components";
import { Row, Card } from "antd";

const { Meta } = Card;

export const FromMujiSection= styled.div`
  background-color:#f4f4f4;
  padding-bottom:40px;

  .ant-card{
    margin:0.8vw;
  }
`

export const FromMujiTitle = styled.h1`
  font-size:24px;
  padding: 70px 0 20px 50px;
  font-weight: normal;
`

export const StyledRow = styled(Row)`
  padding: 0px;
  margin: 0px;
`

export const StyledCard = styled(Card)`
  width: 17%;

  .ant-card-body{
    padding:15px;
  }

  @media screen and (max-width:1152px){
    width:30%;
  }

  @media screen and (max-width:768px){
    width:47%;
  }
`

export const StyleCardMeta = styled(Meta)`

.ant-card-meta-title{
  white-space: normal;
  font-size:1rem;
}

.ant-card-meta-description{
  font-size:12px;
  color:#999;
}
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

export const CenterAlign = styled.div`
  text-align: center;
`
