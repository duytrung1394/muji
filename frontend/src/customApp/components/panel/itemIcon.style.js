import styled from "styled-components";

const categoryListmWrapper = styled.div`
    .list-icon {
        height: 60px;
        span {
          padding: 0px 0px 0px 10px;
          display:table-cell;
          vertical-align:middle;
          font-size: 13px;
          text-overflow: hidden;
        }
    }
    a.list-icon {
      color: #333;
      display: block;
    }
    .box-left img {
      height : 50px;
      width : 50px;
      margin : 10px;
    }
  }

  .box-left {
    float: left;
    width: 35%;
    padding: 8 ８ 8 8;
  }
  .box-right {
    display:table;
    float: left;
    width: 65%;
  }
`


export default categoryListmWrapper;