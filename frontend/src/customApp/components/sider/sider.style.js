import styled from "styled-components";
import { Layout, Menu } from "antd";

export const SiderWrapper = styled(Layout.Sider)`
  .ant-layout-sider {
    background: #fff;
    border-right: solid 1px #f9f9f9;
    position:left;
    left: 0; 
    background:#f7f7f7;
  }
  
  .ant-menu-item:hover{
    color:white;
    background-color:grey;
    a:hover{
      display: block;
      color:white;
    }
  }
`
export const MenuItemGroup = styled(Menu.ItemGroup)`
  .ant-menu-item-group-title
  {
    border-top: 1px solid #ccc;
    font-size:16px;
    color: #333;
    font-weight: 400;
  }

  .ant-menu-item-group
  {
    margin-bottom: 20px;
  }
`;

export const GroupMenuIcon = styled.img`
  width:8%;
  height:15px;
  display:inline;
  margin-right:5px;
  padding-bottom: 2px;
`;

export const MenuItem = styled(Menu.Item)`
  height: 28px !important;
  color: #333;
  font-weight: 700;
  font-family: Hiragino Kaku Gothic ProN;
`;

export const LinkMenuItem = styled(Menu.Item)`
  height: 70px !important;
  font-weight: 700;
  font-family: Hiragino Kaku Gothic ProN;
  padding: "0";
  border-top:1px solid #ccc;
  p {
    font-size:8px;
  }
  a {
    padding-top:10px;
    line-height:28px;
  }
  span {
    font-size:14px;
  }
`;