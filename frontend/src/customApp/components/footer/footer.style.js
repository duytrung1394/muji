import styled from "styled-components";
import { Layout, Row, Col ,List } from "antd";

export const FooterWrapper = styled.div`
  background: #f7f7f7;

  .ant-list-bordered{
    border:none;
  }

  .ant-list-bordered .ant-list-item{
    border:none;
    padding:0;
  }
`;

export const FooterContainer = styled(Row)`
    padding:20px;
    overflow:hidden;
`;

export const FooterIconsWrapper = styled.ul`

`;

export const FooterLogo = styled.img`

`;

export const FooterIconsList = styled.ul`
    padding:0;
    margin:0;
    display:flex;
    position:relative;
    top:110px;
`;

export const FooterIconsListItem = styled.li`
    list-style:none;
    margin-right:6px;
    opacity:0.3;
`;

export const ItemLink = styled.a`

`;

export const FooterIcon = styled.img`

`;

export const FooterListWrapper = styled(Col)`
    .ant-list-sm .ant-list-item{
      padding:0;
      margin-bottom:10px;
    }
`;

export const FooterList = styled(List)`
  
`;

export const FooterListItem = styled(List.Item)`
    .ant-list-item-content-single{
      font-size:12px;
    }
`;

export const FooterListItemLink= styled.a`
    color:#333;
    position:relative;
    left:6vw;
    &:hover{
      color:#333;
    }
`;
