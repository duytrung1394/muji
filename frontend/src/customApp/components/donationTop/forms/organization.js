import React from "react";
import styled from "styled-components";
import { Row,Col,Card } from "antd";

const StyledRow = styled(Row)`
	margin-bottom: 55px;

	.ant-card-bordered {
		border: none;	
	}

	.ant-card-head-title {
		font-size: 19px;
		margin-bottom: 15px;
		padding: 0 40px;
	}

	.ant-card-meta-title {
		font-size: 17px;
		color: #333;
	}

	.ant-card-meta-description {
		font-size: 14px;
		color: #333;	
	}

	.ant-card-body {
		margin-bottom: 15px;
		padding: 0;
	}
`;

const StyledCol = styled(Col)`
	width: 50%;
	padding: 0 40px;
`;

const { Meta } = Card;

const Organization = ({organizations,title})=>{
		if(organizations){
    return (
    <StyledRow type="flex">
			{organizations.map((organization, index)=>{
				return(
					<StyledCol key={index}>
						<Card 
						title={organization.title}
						cover={<img src={organization.img}/>}
						/>
						<Meta
						title={title}
						description={organization.description}
						/>
					</StyledCol>
				);
			})}
    </StyledRow>
		)}
		else return null;
}

export default Organization;