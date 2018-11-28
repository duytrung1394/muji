import React, { Component } from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";

const StyledRow = styled(Row)`
	margin-bottom:55px;
`

const StyledCol = styled(Col)`
	width:25%;
	padding:0 20px;
	margin-bottom:20px;
`

const OtherDonation = ()=>{
	
    return (
			<StyledRow justify="start" align="top">
			
				<StyledCol>
					<Card title="otherDonation"/>
				
				</StyledCol>
			</StyledRow>
		)
}

export default OtherDonation;