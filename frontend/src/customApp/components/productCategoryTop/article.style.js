import styled from "styled-components";

const ArticleWrapper = styled.div`

.content-wrapper{
    height:100%;
    font-size: 14px;
    background: linear-gradient(#fafafa, #f6f6f6);
    background: #f5fbfb;
}

.category-title{
    font-size: 25px;
    font-weight: bold;
    margin: 0 10px 20px;
}

.ant-col-14{
    padding: 40px 30px;
}
.category-name{
    font-size: 36px;
    margin-bottom:4%;
    font-family: serif;
    font-weight:normal;
    color: rgba(0, 0, 0, 0.8);
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

.promotion-img{
    display:block;
    width:100%;
    height:36vw;
    min-height: 100%;
    max-width: 1440px;
}
`;

export default ArticleWrapper;