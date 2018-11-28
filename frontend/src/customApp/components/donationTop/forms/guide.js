import React, { Component } from "react";
import styled from "styled-components";
import { Col,Card,Popover,Row } from "antd";
import IntlMessages from "../../../../components/utility/intlMessages";

const GuideWrapper = styled.div`
    border:1px solid #ddd;
		background: #f7f7f7;
		// padding: 15px 220px;
	
		h2 {
			color: #333;
			font-size: 14px;
			margin-bottom: 15px;
		}

		.ant-card-head {
			background: #f7f7f7;
			border: none;
			padding: 0;
			min-height: 35px;
		}

		.ant-card-head-title {
			font-size: 12px;
			font-weight: bold;
			border-top: 1px solid #ddd;
			margin: 0;
			padding: 5px 0 0 0;
		}

		.ant-card {
			background: #f7f7f7;
			border: none;
			font-size: 11px;
			padding-bottom: 20px;
		}

		.ant-card-body {
			padding :0;
		}
	`;

const StyledA = styled.a`
	 font-size: 11px;
	 color: #67affd;
`;

const StyledCol = styled (Col)`
	 width: 33%;
	 padding: 0 15px 0 0;
`

const StyledRow = styled (Row)`
	 margin: auto;
`

const OutsideDiv = styled.div`
	margin: 10px 150px;
`;

const InsideDiv = styled.div`
		width: 115%;
`;

const Guide = ()=>{
    return (
        <GuideWrapper>
					<OutsideDiv>
        	<h2>
						<IntlMessages id=  "donationTop.userGuide" />
					</h2>
					<InsideDiv>
						<StyledRow type = "flex" justify = "center">
							<StyledCol>
								<Card title={<IntlMessages id= "donationTop.paymentMethod" />}><IntlMessages id= "donationTop.paymentMethodContent" /></Card>
							</StyledCol>
							<StyledCol>
								<Card title={<IntlMessages id= "donationTop.change" />}><IntlMessages id= "donationTop.donationCancel" /></Card>
							</StyledCol>
							<StyledCol>
								<Card title={<IntlMessages id= "donationTop.taxExemptions" />}><IntlMessages id= "donationTop.taxExemptionsCertificate" /></Card>
							</StyledCol>
						</StyledRow>
					</InsideDiv>
					<Popover trigger= "click">
        		<StyledA>
							<IntlMessages id= "donationTop.fundRaisingTickets"  />
						</StyledA>
					</Popover>
					</OutsideDiv>
        </GuideWrapper>
     )
}

export default Guide;