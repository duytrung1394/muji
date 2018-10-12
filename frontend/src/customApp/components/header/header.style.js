import styled from "styled-components";

const HeaderWrapper = styled.div`
  .ant-layout-header {
    background: #fff;
    border-bottom: solid 1px #f9f9f9;
    height: 5rem;
    padding:30px 0 0 15px;
  }

  .search{
    padding:0 20px 0 100px;
    width:82%;
  }

  .banner {
    text-align: center;
    b {
      padding-left: 1rem;
    }
  }

  .logo-search-icons {
    display:flex;
    ul{
      width:250px;
      padding:0;
      text-align:right;
    }
    li{
      margin:0 10px;
      display:inline-block;
      list-style:none;
      ul{
        display:inline-block;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
        background-color:#fff;
        z-index: 3000;
        border-radius:5px;
        text-align: center;
        width:100px;
        li{
          margin:0;
          display:list-item;
          a{
            font-size: 12px;
            white-space: nowrap;
            display:block;
            tansition:background-color 0s;
            tansition:color 0s;
          }
          a:hover{
            border-radius:5px;
            background-color:gray;
            color:#fff;
          }
        }
      }
    }


    p{
      position:relative;
      bottom:20px;
    }

    img{
      margin-top:5px;
    }
    img, form {
      display: inline;
    }

    a{
      color:rgba(0,0,0,0.7);
      font-size:6px;
      font-weight:lighter;
    }

    .login{
      position:relative;
    }
    
    .login-menu{
      display:none;
      position:absolute;
      top:55px;
      right:0px;
      li{
      border-bottom:1px solid #f7f7f7;
    }
  }

  .login:hover{
    .login-menu{
      display:block;
    }
  }

  .support{
    position:relative;
  }
    .support-menu{
      display:none;
      position:absolute;
      top:55px;
      right:0px;
      width:190px;
    }
  }

  .support:hover{
    .support-menu{
      display:block;
    }
  }
`
export default HeaderWrapper;
