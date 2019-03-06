import React from "react";
import styled from "styled-components";

const LayoutSectionSummary = styled.section`
    padding: 16px;
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
const LayoutMileSummary = styled.div`
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
`
const LayoutList = styled.ul`
    border-top: 1px solid #999;
    margin: 0;
    padding: 0;
`
const ListItemRed = styled.li`
    color: #7f0019;
    list-style: none;
    margin-top: 17px;
    padding: 0 16px;
    &:last-child {
        border-bottom: 1px solid #999;
        margin-top: 10px;
        padding-bottom: 17px;
    }
`

const ListItem = styled.li`
    list-style: none;
    margin-top: 17px;
    padding: 0 16px;
    &:last-child {
        border-bottom: 1px solid #999;
        margin-top: 10px;
        padding-bottom: 17px;
    }
`
const LayoutMileStage = styled.dl`
    margin-top: 10px;
`
const SpanMileStage = styled.span`
    padding-left: 20px;
`
const Paragraph = styled.p`
    margin: 0;
    padding: 0;
`
const Header1 = styled.h1`
    color: #585858;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 10px;
`

const HistoryInfoSummary = (props) => {
    return (
        <LayoutInfo>
            <LayoutSectionSummary>
                <Header1>MUJIマイル履歴（今年度）</Header1>
                <LayoutMileSummary>
                    <Paragraph>今年度のマイル：9,566マイル</Paragraph>
                    <Paragraph>あと 10,434 マイルで 200 ポイント取得</Paragraph>
                </LayoutMileSummary>
                <LayoutList>
                    <ListItem>累積期間：2018年3月1日～2019年2月末日</ListItem>
                    <ListItemRed>※2018年度に取得したマイルは2019年2月28日（木）23時59分で失効します。</ListItemRed>
                </LayoutList>
                <LayoutMileStage>
                    <Paragraph>累積マイル：3,000 マイル<SpanMileStage>ブロンズステージ</SpanMileStage></Paragraph>
                    <Paragraph>あと 4,000 マイルでシルバーステージになります</Paragraph>
                </LayoutMileStage>
            </LayoutSectionSummary>
        </LayoutInfo>
    )
}

export default HistoryInfoSummary;