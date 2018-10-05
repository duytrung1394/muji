import styled from "styled-components";

const FooterWrapper = styled.div`
  overflow:hidden;
  background: #f7f7f7;
  
  ul{
    list-style-type:none;
    font-size:12px;
  }

  li{
    margin-bottom:10px;
    margin-right:20px;
  }

  a{
    color:#333;
    cursor:pointer;
  }

  a:hover{
    color:#333;
  }

  li > ul{
    margin:0;
    padding:0;
  }

  #footer-logo{
    padding-bottom:100px;
  }

  .social-buttons{
    margin-bottom:30px;
  }

  .social-buttons > ul > li{
    display:table-cell;
    padding-right:6px;
  }
`
export default FooterWrapper;
