import React, { Component } from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";

const StyledRow = styled(Row)`
	margin-bottom:55px;
`

const StyledCol = styled(Col)`
	width:15%;
	padding:0 10px 20px 10px;
`

const { Meta } = Card;

const OtherDonation = ({otherDonations})=>{
    return (
			<div>
				<h2>その他の募金券</h2>
					<StyledRow type="flex" justify="start" align="top">
						{otherDonations && otherDonations.map((otherDonation,index)=>{
							return(
							<StyledCol key={index}>
								<Card 
								cover={<img src={otherDonation.img}/>}
								/>
								<Meta
								title={otherDonation.title}
								description={otherDonation.organization}
								/>
							</StyledCol>
							);
						})}
					</StyledRow>
			</div>
		)
}

export default OtherDonation;