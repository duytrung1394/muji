import styled from "styled-components";

const ArticleWrapper = styled.div`

margin-bottom:30px;

.ant-breadcrumb{
    margin:0 10px 15px;
}

.breadcrumb{
    font-size:12px;
}

.breadcrumb:hover{
    color:rgba(0, 0, 0, 0.45);
}

.content-wrapper{
    font-size: 14px;
    background: linear-gradient(#fafafa, #f6f6f6);
    width: 100%;
    max-width: 1540px;
    margin: 0 auto 0px;
    overflow:hidden;
}

.category-title{
    font-size: 25px;
    font-weight: bold;
    margin: 0 10px 20px;
}

.ant-col-xl-14{
    padding: 30px 80px 0 30px;
}

.category-discription-wrapper{
    padding: 30px 80px 0 30px;
}

.ant-col-10{
    float:right;
}

.category-name{
    font-size: 36px;
    margin-bottom:4%;
    font-family: serif;
    font-weight:normal;
    color: rgba(0, 0, 0, 0.8);
    z-index:2;
}

.category-discription{
    font-size: 16px;
    font-family: serif;
    line-height: 2.1;
    color: rgba(0, 0, 0, 0.6);
}

.ant-list {
    margin: 3% 0;
}

.ant-list-split .ant-list-item {
    border:none;
}

.ant-avatar{
    border-radius:0px;
    width: 50px;
    height: 50px;
}

.ant-list-item-meta-title{
    color: rgba(0, 0, 0, 0.55);
}

.ant-list-item-meta-title:hover{
    color: rgba(0, 0, 0, 0.55);
}

.ant-list-item-meta-description{
    font-weight: bold;
    color:#333;
}

.ant-list-item-meta-description:before{
    content:"税込 ";
    font-size:10px;
    color: rgba(0, 0, 0, 0.5);
}
.ant-list-item-meta-description:after{
    content:" 円";
    font-size:10px;
    color: rgba(0, 0, 0, 0.5);
}

.promotion-figure{
    margin:0;
}

.promotion-img{
    width:100%;
    height:auto;
    min-height: 100%;
    max-width: 1440px;
    z-index:1;
}

@media screen and (max-width:1300px){

.category-name{
    font-size:32px;
    position:absolute;
    top:-26vh;
    left:2vh;
}

.ant-col-xl-14{
    padding: 0px 80px 0 30px;
    width:100%;
}

.category-discription-wrapper{
    clear:both;
    padding-top:40px;
}

}

@media only screen and (max-width: 1024px){

  .category-name{
    font-size:4vw;
  }

  .ant-col-10{
      width:60%;
  }

    .promotion-img{
        position: visible;
        top: 0;
        right: 0;
    }
}

@media only screen and (max-width: 768px){

    .ant-col-md-14{
        position:absolute;
        top:80;
        padding-left:15px;
    }

    .category-name{
        font-size:22px;
        top:27vh;
    }

    .ant-list-item-meta-title{
        font-size:12px;
        line-height:1.5;
        font-weight:400;
        color: rgba(0, 0, 0, 0.7);
 }
}

@media only screen and (max-width: 475px){

    .category-name{
        position:static;
        margin:0;
        padding:10px 0;
      }

      .ant-col-md-14{
        position:static;
    }
    
    .ant-col-10{
        width:100%;
    }

    .category-discription-wrapper{
        padding:0 15px;
    }

    .category-discription{
        font-size:14px;
        line:height:1.5;
    }

    .figure-wrapper{
        margin-bottom:15px;
    }

`;

export default ArticleWrapper;