import React, { Component } from "react";
import styled from "styled-components";
import { List, Avatar } from "antd";

const MessageWrapper = styled.div`
	border:1px solid #ccc;
	margin-bottom:55px;
`


const Message = ({messages})=>{
	if(messages){
	const data = 
		messages.map(message=>{
			return (
				<div>
				{message.organization}<br/>
				{message.position}<br/>
				{message.name}
				<List.Item.Meta
				avatar={<img src={message.img} />}
				description={message.description}
				/>
				</div>
			);
		})
	
	return (
		<MessageWrapper>
			<h2>団体からのメッセージ</h2>
			<List 
			dataSource={data}
			renderItem=
			{item => <List.Item>{item}</List.Item>}
			/>
		</MessageWrapper>
	)}
		else return null;
}
	


export default Message;