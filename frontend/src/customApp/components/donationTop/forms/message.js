import React, { Component,Fragment } from "react";
import styled from "styled-components";
import { List, Avatar } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const MessageWrapper = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 3%;
	margin-bottom:55px;

	h2 {
		color: #333;
		font-size: 19px;
		margin: 0;
	}
	
	.ant-list-item-content-single {
		font-size: 17px;
	}

	img {
		width: 83%;
		padding: 0 5px 0 20px;
	}

	.ant-list-item-meta-avatar {
    margin: 0;
	}

	.ant-list-item-meta-description {
		font-size: 14px;
		line-height: 22px;
		color: #333;
	}
`

const StyledList = styled(List)`

`

const ListItem = styled(List.Item)`
	& .ant-list-item-content{
		display: block;
	}
`

const StyledDiv = styled.div`
	margin-bottom: 15px;
`

const Message = ({messages})=>{
	if(messages){
	const data = 
		messages.map(message=>{
			return (
				<Fragment>
				<StyledDiv>
					{message.organization}<br/>
					{message.position}<br/>
					{message.name}
				</StyledDiv>
				<div>
					<List.Item.Meta
					avatar={<img src={message.img} />}
					description={message.description}
					/>
				</div>
				</Fragment>
			);
		})
	
	return (
		<MessageWrapper>
			<h2>
				<IntlMessages id= "donationTop.organizationMessageTitle" />
			</h2>
			<StyledList
			dataSource={data}
			renderItem=
			{item => <ListItem>{item}</ListItem>}
			/>
		</MessageWrapper>
	)}
		else return null;
}
	


export default Message;