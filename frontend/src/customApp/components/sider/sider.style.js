import styled from "styled-components";

const SidebarWrapper = styled.div`

  .ant-layout-sider {
    background: #fff;
    border-right: solid 1px #f9f9f9;
    height:3000px;
    overflow:scroll;
    position:left;
    left: 0; 
    background:#f7f7f7;
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

  .ant-menu-item a:hover{
    color:white;
  }

  .ant-menu-vertical, 
  .ant-menu-vertical-left, 
  .ant-menu-vertical-right, 
  .ant-menu-inline 
  {
    &.ant-menu-item:not(:last-child)
    {
      margin-bottom: 0px;
    }
    .ant-menu-item, .ant-menu-submenu-title {
      height: 28px;
      font-size: 13px;
      font-weight: bold;
      font-family: Hiragino Kaku Gothic ProN;
      padding:5px 10px;
      line-height:20px;
    }
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

  .sider-icon{
    width:8%;
    height:15px;
    display:inline;
    margin-right:5px;
    padding-bottom: 2px;
  }

  .sider-everyday  {
    color:black;
    height:77px;
    border-top:1px solid #ccc;
  }

  .sider-everyday a:hover{
    color:white;
  }

  .sider-everyday p{
    font-size:8px;
  }

  .sider-everyday a{
    font-size:13px;
    padding-top:10px;
    padding-bottom:20px;
    padding-left:20px;
    line-height:28px;
  }

  .sider-everyday span{
   font-size:14px;

  }
`
export default SidebarWrapper;

