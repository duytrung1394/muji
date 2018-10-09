import styled from "styled-components";

const HeaderWrapper = styled.div`
  .ant-layout-header {
    background: #fff;
    border-bottom: solid 1px #f9f9f9;
    height: 10rem;
  }

  .search{
    padding:0 20px;
    width:70%;
  }

  #banner {
    text-align: center;
    b {
      padding-left: 1rem;
    }
  }

  #logo-search-icons {
    #search {
      padding: 0 1rem 0 0;
      margin:0;
    }
    img, form {
      display: inline;
    }

    a{
      color:#333;
      opacity:0.7;
      font-size:6px;
      font-weight:lighter;
    }

   #cart:after{
     content:"カート";
      position:relative;
      top:20px;
      right:31px;
      font-weight:lighter;
      font-size:12px;
    }

    #login:after{
      content:"ログイン";
       position:relative;
       top:20px;
       right:38px;
       font-weight:lighter;
       font-size:12px;
     }

     #support:after{
      content:"サポート";
       position:relative;
       top:20px;
       right:38px;
       font-weight:lighter;
       font-size:12px;
     }
  }
`
export default HeaderWrapper;
