import styled from "styled-components";

const HeaderWrapper = styled.div`

  height: 70px;

  .ant-layout-header {
    background: #fff;
    padding: 0;
    height: 100%;
    line-height: normal;
  }

  .antd-header-row {
    height: 100%;

    .header-logo {
      width: 200px;
      max-width: 200px;
      min-width: 200px;
      text-indent: 20px;
    }

    .header-search {
      flex: 1;
      padding: 0 15px;
    }

    .header-btns {

      .header-btn {
        padding: 0 5px;
        text-align: center;

        .header-btn-anchor {
          display: block;
          text-align: center;
        }
      }
    }
  }
`
export default HeaderWrapper;
