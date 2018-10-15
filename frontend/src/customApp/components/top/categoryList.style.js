import styled from "styled-components";

const categoryListmWrapper = styled.div`
  .ant-card-grid.icon-list {
    width: 13.3%;
    padding: 5 5 5 5;
    border: 5px;
    box-shadow: none;
    .list-icon {
        height: 60px;
        span {
          padding: 0px 0px 0px 10px;
          display:table-cell;
          vertical-align:middle;
          font-size: 13px;
        }
    }
    div {
      min-height : 60px;
      border: 10px;
    }
    span {
    }
    a.list-icon {      
      color: #333;
      display: block;
    }
    .box1 img {
      height : 50px;
      margin : 10px;
    }
  }

  .box1 {
    float: left;
    width: 30%;
    padding: 8 ８ 8 8;
  }
  .box2 {
    display:table;
    width:100%;
    float: left;
    width: 70%;
  }

  .icon-list {
    border: none;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
`


export default categoryListmWrapper;