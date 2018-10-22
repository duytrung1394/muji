import styled from "styled-components";

const SidebarWrapper = styled.div`

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
  
  .ant-menu-vertical, 
  .ant-menu-vertical-left, 
  .ant-menu-vertical-right, 
  .ant-menu-inline 
  {
    &.ant-menu-item:not(:last-child)
    {
    }
    .ant-menu-item:not(.sider-everyday), .ant-menu-submenu-title {
      height: 28px;
      color: #333;
      font-size: 13px;
      font-weight: 700;
      font-family: Hiragino Kaku Gothic ProN;
      padding:0px 10px;
      line-height:20px;
      margin-top: 4px;
      margin-bottom: 4px;
    }
    .ant-menu-item.sider-everyday {
      height: 70px;
      color: #333;
      font-size: 13px;
      font-weight: 700;
      font-family: Hiragino Kaku Gothic ProN;
      padding: "0";
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }

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

  .sider-icon{
    width:8%;
    height:15px;
    display:inline;
    margin-right:5px;
    padding-bottom: 2px;
  }

  .sider-everyday  {
    border-top:1px solid #ccc;
    a:hover{
      color:white;
    }
    p{
      font-size:8px;
    }
    a{
      font-size:13px;
      padding-top:10px;
      padding-bottom:20px;
      line-height:28px;
    }
    span{
     font-size:14px;
    }
  }
`
export default SidebarWrapper;