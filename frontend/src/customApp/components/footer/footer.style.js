import styled from "styled-components";
import { Layout, Row } from "antd";

const { Footer } = Layout;

export const StyledAntdFooter = styled(Footer)`
    display:block;
    overflow:hidden;

    .ant-col-4{
        display:
        overflow:hidden;
    }

    .ant-list-split .ant-list-item {
        border-bottom: none;
    }

    .ant-col-9{
        color:#555555;
        font-size:12px;
    }
`;

export const SiteMapRow = styled(Row)`
    overflow:hidden;
    margin-bottom:30px;
`;

export const NavRow = styled(Row)`
    float:left;
`;

export const NavLink = styled.a`
    font-size: 12px;
    color: #333;
    margin:20px 10px;

    &:hover{
        color: #333;
    }
`;