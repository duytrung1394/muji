import styled from "styled-components";

const SidebarWrapper = styled.div`
  .ant-layout-sider {
    background: #fff;
    border-right: solid 1px #f9f9f9;   
    height:2000px;
    
  }
  
  .ant-menu-item{
    color:black;
  }

  .ant-menu-item:hover{
    color:white;
    background-color:grey;
  }
 
  .ant-menu-item > a{
    color:black;
  }

  .ant-menu-item > a:hover{
    color:white;
  }

  .ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) 
  {
    margin-bottom: 0px;
   
    
  }
  .ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title
  {
    height: 28px;
    font-size: 12px;
    font-weight: bold;
    font-family: Hiragino Kaku Gothic ProN;
    padding:5px 10px;
    vertical-align:middle;
    line-height:20px;

  }
  .ant-menu-item-group-title
  {
    border-top: 1px solid #ccc;
    color:black;
    font-size:16px;
  }
  .ant-menu-item-group
  {
    margin-bottom: 20px;
  }
  background: #fff;  

  .active{
    background-color:red;
  }

  .sider-icon{
    width:8%;
    height:15px;
    display:inline;
    margin-right:5px;
    padding-bottom: 2px;
  }

  .sider-everyday {
    margin-bottom:0;
  }

  .sider-everyday-p {
    margin-bottom:0;
    font-size:8px;
  }
  .sider-everyday:hover {
    background-color:grey;
    color:white;
    cursor:pointer;
  }

  
`
export default SidebarWrapper;
