import styled from "styled-components";
import { Layout, Row } from "antd";

const { Footer } = Layout;

export const StyledAntdFooter = styled(Footer)`
  overflow:hidden;

  .ant-list-split .ant-list-item {
    border-bottom: none;
  }
`;

export const SiteMapRow = styled(Row)`
  overflow:hidden;
  margin-bottom:30px;
`;

export const NavRow = styled(Row)`
  text-align: left;
  .copy-right > p {
    float:right;
  }
`;

export const NavLink = styled.a`
  font-size: 12px;
  color: #333;
  margin:20px 10px;

  &:hover{
    color: #333;
  }
`;