import styled from "styled-components";

const FooterWrapper = styled.div`
  overflow:hidden;
  background: #f7f7f7;
  padding-bottom:40px;
  font-weight:lighter;

  .antd{
    background-color:#f7f7f7;
    padding-top:20px;
  }
  
  ul{
    list-style-type:none;
    font-size:12px;
  }

  li{
    margin-bottom:12px;
  }

  a{
    color:rgba(0,0,0,0.65);
    cursor:pointer;
  }

  a:hover{
    color:rgba(0,0,0,0.65);
  }

  li > ul{
    margin:0;
    padding:0;
  }

  .footer-logo{
    padding-bottom:100px;
  }

  .social-buttons{
    margin-top:30px;
    margin-bottom:30px;
  }

  .social-buttons > ul > li{
    display:table-cell;
    padding-right:6px;
    opacity:0.3;
  }

  .footer-navi > li{
    display:inline;
    margin-right:15px;
  }

  .copyRight{
    float:right;
  }
`
export default FooterWrapper;
