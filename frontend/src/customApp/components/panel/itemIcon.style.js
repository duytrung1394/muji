import styled from "styled-components";

const categoryListmWrapper = styled.div`
  .item-icon {
      height: 60px;
      width: 100%;
      span {
        padding: 0px 0px 0px 10px;
        vertical-align: middle;
        width: calc(100% - 60px);
        font-size: 13px;
        display: inline-block;
        word-wrap:break-word;
      }
      img {
        height : 40px;
        width : 40px;
        margin : 10px;
      }
    }
    a.item-icon {
      color: #333;
    }
  }
`

export default categoryListmWrapper;