import styled from "styled-components";

const SidebarWrapper = styled.div`
  .ant-layout-sider {
    background: #fff;
    border-right: solid 1px #f9f9f9;    
  }
  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) 
  {
    margin-bottom: 0px;
  }
  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title
  {
    height: 28px;
    font-size: 10px;
    font-weight: bold;
    font-family: Hiragino Kaku Gothic ProN;
  }
  .ant-menu-item-group-title
  {
    border-top: 1px solid #ccc;
  }
  .ant-menu-item-group
  {
    margin-bottom: 20px;
  }
  background: #fff;  
`
export default SidebarWrapper;
