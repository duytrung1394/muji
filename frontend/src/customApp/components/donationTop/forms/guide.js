import React, { Component } from "react";
import styled from "styled-components";
import { List, Card,Popover, Row, Col } from "antd";

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
					<div style={{margin:"10px 30px auto"}}>
            <h2>ご利用ガイド</h2>
       
            <Row type="flex" justify="center" >
         
                <Col style={{width:"33%",padding:"10px 20px"}}>
                	<Card title={'お支払い方法'}>{'クレジットカード、MUJIショッピングポイント、MUJI GIFT CARDでのお支払いが可能です。'}</Card>
                </Col>
								<Col style={{width:"33%",padding:"10px 20px"}}>
                	<Card title={'変更・キャンセル'}>{'寄付のキャンセル／寄付先の変更はできません。'}</Card>
                </Col>
								<Col style={{width:"33%",padding:"10px 20px"}}>
                	<Card title={'税金控除'}>{'税金控除の証明書はお出しできません。ご了承ください。'}</Card>
                </Col>
            </Row>
            
        <a>ご利用ガイド「募金券について」</a>
				</div>
        </GuideWrapper>
        )
}

export default Guide;