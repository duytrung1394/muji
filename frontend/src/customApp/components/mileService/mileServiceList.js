import React from "react";
import styled from "styled-components";

const LayoutSectionList = styled.div`
    padding: 16px;
    font-size: 13px;
    background: #fff;
    box-shadow: 0 1px 3px 1px rgba(153, 153, 153, 0.5);
`
const LayoutInfo = styled.div`
    margin: 0;
    border: 0;
    outline: 0;
    font: inherit;
    display: block;
    background: #f2f2f2;
    margin-top: 30px;
    padding: 16px;
    font-size: 12px;
`
const LayoutList = styled.ul`
    border-top: 1px solid #999;
    margin: 0;
    padding: 0;
`
const ListItemInList = styled.li`
    list-style: none;
    padding: 16px;
    border-bottom: 1px solid #999;
`
const ListItemDL = styled.dl`
    display: block;
    margin: 0;
    padding: 0;
`
const ListItemDT = styled.dt`
    font-weight: bold;
    display: inline-block;
    margin: 0;
    padding: 0;
`
const ListItemDD = styled.dd`
    display: inline-block;
    margin: 0;
    padding: 0;
`
const Header1 = styled.h1`
    color: #585858;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 10px;
`

const HistoryInfoList = (props) => {
    console.log(props)
    const { mile_history } = props;

    return (
        <LayoutInfo>
            <LayoutSectionList>
                <Header1>ご利用履歴</Header1>
                <LayoutList>
                    {mile_history.map((value, index) => {
                        return (
                            <ListItemInList>
                                <ListItemDL className="u-mt--5">
                                    <ListItemDT>利用日：</ListItemDT>
                                    <ListItemDD>2018年11月24日（土）</ListItemDD>
                                </ListItemDL>
                                <ListItemDL className="u-mt--5">
                                    <ListItemDT className="history-info--return">利用内容：</ListItemDT>
                                    <ListItemDD>お買い物＠ネットストア</ListItemDD>
                                </ListItemDL>
                                <ListItemDL className="u-mt--5">
                                    <ListItemDT>マイル数：</ListItemDT>
                                    <ListItemDD>6,291マイル</ListItemDD>
                                </ListItemDL>
                            </ListItemInList>
                        )
                    })}
                </LayoutList>
            </LayoutSectionList>
        </LayoutInfo>
    )
}

export default HistoryInfoList;