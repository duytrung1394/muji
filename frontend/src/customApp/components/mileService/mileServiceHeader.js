import React from "react";
import styled from "styled-components";

const LayoutHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 16px;
`
const HeaderPreceding = styled.h1`
    font-size: 19px;
`
const HeaderLink = styled.a`
    color: #60b3fa;
    font-size: 13px;
    margin-top: 9px;
`

const HistoryHeader = (props) => {
    return (
        <LayoutHeader>
            <HeaderPreceding>MUJIマイル履歴</HeaderPreceding>
            <HeaderLink href="#"><span className="history-info--preceding">MUJIマイル履歴（前年度）</span></HeaderLink>
        </LayoutHeader>
    )
}

export default HistoryHeader;