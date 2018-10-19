import styled from "styled-components";

const HeaderWrapper = styled.div`

  height: 70px;

  .ant-layout-header {
    background: #fff;
    padding: 0;
    height: 100%;
    line-height: normal;
  }

  .antd-header-row {
    height: 100%;
    .header-logo {
      width: 200px;
      max-width: 200px;
      min-width: 200px;
      text-indent: 20px;
    }

    .header-search {
      flex: 1;
      padding: 0 15px;
    }

    .header-btns {
      .header-cart-btn {
        padding: 0 5px;
        text-align: center;
        font-size : 28px;
        .header-btn-anchor {
          display: block;
          text-align: center;
          padding:0 5px;
          color: rgba(0, 0, 0, 0.65);
        }
        div {
          font-size : 13px;
        }
      }
      .header-login-btn {
        padding:0 5px;
        text-align:center;
        font-size : 28px;
        div {
          font-size : 13px;
        }
      }
      .header-support-btn {
        padding:0 5px;
        text-align:center;
        font-size : 28px;
        div {
          font-size : 13px;
        }
      }
    }
  }
  
  .header-login-btn:hover .header-login-list{
    display:block;
  }

  .header-support-btn:hover .header-support-list{
    display:block;
  }

  .list-item{
    height:45px;
    border-bottom:1px solid rgba(0 0 0 0.6);
  }

  .header-login-list{
    background-color:#fff;
    width:100px;
    font-size:12px;
    z-index:3000;
    position:absolute;
    right:55px;
    display:none;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border:none;
  }

  .login-list-value{
    color:gray;
    display:block;
    width:100px;
    position:relative;
    padding:13px 0;
    right:24px;
    border:none;
  }

  .login-list-value:hover{
    color:#fff;
    background-color:gray;
    border-radius:2px;
  }

  .header-support-list{
    background-color:#fff;
    width:170px;
    font-size:12px;
    z-index:3000;
    position:absolute;
    right:5px;
    display:none;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border:none;
  }

  .support-list-value{
    color:gray;
    display:block;
    width:170px;
    line-height:20px;
    position:relative;
    padding:12px 0;
    right:24px;
  }

  .support-list-value:hover{
    color:#fff;
    background-color:gray;
  }

  .support-list-value:first-child{
    border-radius:2px;
  }

`
export default HeaderWrapper;
