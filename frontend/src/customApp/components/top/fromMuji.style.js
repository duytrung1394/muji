import styled from "styled-components";

const FromMujiWrapper = styled.div`
 background-color:#f4f4f4;
  padding-bottom:60px;

 .from-muji-title{
   font-size:24px;
   padding: 70px 0 20px 50px;
   font-weight: normal;
 }

  .card-container{
    display:flex;
    flex-flow: row wrap;
    margin-bottom:50px;
    padding-left:0px;
    justify-content: space-around;
  }

  .cards{
    font-size:12px;
    margin:auto 5px;
    width:17%;
    max-height:max-content;
  }

  .cards-new{
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
  }

  .ant-card-meta-title{
    text-overflow: visible;
    overflow: visible;
    white-space: normal;
  }

  .load-more{
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
  }

  .load-more:hover{
    background-color:#f4f4f4;
    color: #585858;
    border: 1px solid #CCCCCC;
  }
`
export default FromMujiWrapper;
