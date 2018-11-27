import React, { Component } from "react";
import styled from "styled-components";
import { List, Card,Popover } from "antd";

const GuideWrapper = styled.div`
    border:1px solid grey;
`


const data = [
    {
      title: 'お支払い方法',
      content: 'クレジットカード、MUJIショッピングポイント、MUJI GIFT CARDでのお支払いが可能です。'
    },
    {
      title: '変更・キャンセル',
      content: '寄付のキャンセル／寄付先の変更はできません。'
    },
    {
      title: '税金控除',
      content: '税金控除の証明書はお出しできません。ご了承ください。'
    }
  ];


const Guide = ()=>{
    return (
        <GuideWrapper>
            <h2>ご利用ガイド</h2>
        <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <Card title={item.title}>{item.content}</Card>
            </List.Item>
            )}
        />
        <a>ご利用ガイド「募金券について」</a>
        </GuideWrapper>
        )
}

export default Guide;