import styled from "styled-components";
import { Col } from "antd";

// TODO: sidebar-width
const sidebarWidth = 230;

export const HeaderWrapper = styled.div`
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
      width: ${sidebarWidth}px;
      max-width: ${sidebarWidth}px;
      min-width: ${sidebarWidth}px;
      text-indent: 20px;
    }

    .header-search {
      flex: 1;
      padding: 0 15px;
    }
  }
`
export const HeaderBtnsCol = styled(Col)`
  .header-btn {
    position: relative;
    padding: 0 5px;
    text-align: center;
    font-size: 28px;

    & > a {
      display: block;
      text-align: center;
      padding: 0 5px;
      color: rgba(0, 0, 0, 0.65);
    }

    .header-btn-text {
      font-size: 13px;
    }

    .dropdown-list {
      z-index: 3000;
      display: none;
    }

    &:hover .dropdown-list {
      display:block;
    }
  }
`;