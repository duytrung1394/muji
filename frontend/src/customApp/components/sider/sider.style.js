import styled from "styled-components";
import { Layout, Menu } from "antd";

export const SiderWrapper = styled(Layout.Sider)`
  overflow-y: auto;
  border-right: solid 1px #f9f9f9;
  
  .ant-menu-item:hover {
    color:white;
    background-color:grey;

    a:hover {
      color:white;
    }
  }
`;

export const MenuItemGroup = styled(Menu.ItemGroup)`
  margin-bottom: 20px;
  border-top: 1px solid #ccc;

  .ant-menu-item-group-title {
    font-size:16px;
    color: #333;
    font-weight: 400;
  }  
`;

export const MenuItemGroupIcon = styled.img`
  width:8%;
  height:15px;
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
  height: 80px !important;
  margin: 0 !important;
  font-weight: 700;
  font-family: Hiragino Kaku Gothic ProN;
  border-top: 1px solid #ccc;

  a {
    padding-top:10px;
    line-height:28px;

    span {
      font-size:14px;
    }

    p {
      font-size:8px;
    }
  }
`;