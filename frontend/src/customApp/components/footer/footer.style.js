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


export const Logo = styled.img`

`;

export const IconsList = styled.ul`
    padding:0;
    margin:0;
    display:flex;
    position:relative;
    top:110px;
`;

export const IconsListItem = styled.li`
    list-style:none;
    margin-right:6px;
    opacity:0.3;
`;

export const ItemLink = styled.a`

`;

export const Icon = styled.img`

`;

export const ListWrapper = styled(Col)`
    .ant-list-sm .ant-list-item{
      padding:0;
      margin-bottom:10px;
    }
`;

export const StyledList = styled(List)`
  
`;

export const ListItem = styled(List.Item)`
    .ant-list-item-content-single{
      font-size:12px;
    }
`;

export const ListItemLink= styled.a`
    color:#333;
    position:relative;
    left:6vw;
    &:hover{
      color:#333;
    }
`;

export const Nav = styled.ul`
    clear:both;
    overflow:hidden;
    padding-top:20px;
`;

export const NavItem = styled.li`
    list-style:none;
    padding-right:20px;
    float:left;
`;

export const NavItemLink = styled.a`
    font-size:12px;
    color:#333;
`;

export const CopyWrite = styled.span`
    float:right;
    color: #555555;
    font-size: 12px;
`;