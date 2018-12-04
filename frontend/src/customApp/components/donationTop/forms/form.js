import React, { Component } from "react";
import {
  Row,
  Col,
  Input,
  Form as AntdForm,
  Radio,
  Select,
  Button,
  Popover
} from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import Organization from "./organization";
import Activity from "./card";
import Message from "./message";
import OtherDonation from "./otherDonation";
import Guide from "./guide";
import LargeButton from "../../form/largeButton";

const InputGroup = Input.Group;
const Option = Select.Option;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 720px;
  ma-height: 720px;
`;

const DonationButton = styled(LargeButton)`
  padding: 0;
  margin-left: 20px;
  font-size: 12px;
  width: 153px;
  border-radius: 25px;
  background-color: #333;
  color: #fff;
  border: none;
  &:hover {
    color: #fff;
  }
`;

const UserGuideDiv = styled.div`
  font-size: 14px;
`;

const ImgCol = styled(Col)``;

const FormCol = styled(Col)`
  && {
    padding: 0 40px;
  }

  h2 {
    font-size: 19px;
    margin-bottom: 20px;
    color: #333;
    font-weight: 300;
  }

  ul {
    padding: 10px 0 0 0;
  }

  .selected {
    magin-top: 10px;
    list-style: none;
    font-size: 11px;
  }

  .price {
    font-size: 11px;
  }
`;

const StyledSpan = styled.span`
  font-size: 13px;
`;

const PriceSpan = styled.span`
  font-size: 23px;
`;

const FormItem = styled(AntdForm.Item)`
  font-size: 12px;
  color: #333;
  font-weight: bold;
  label {
    font-size: 12px;
    color: #333;
    font-weight: bold;
  }
`;

const StyledSelect = styled(Select)`
  display: ;
`;
const NeckPrice = styled.span``;

const Quantity = styled.div`
  display: inline-block;
`;

const RadioGroup = styled(Radio.Group)`
  width: 100%;
`;

const RadioButton = styled(Radio.Button)`
  height:50px;
  width:100%;
  max-width:180px;
  text-align:center;
  border: 3px solid #ccc;
  color: #333333;
  span {
    height:10px;
  }
  &:hover {
    border: 3px solid #7f0019;
  }
  & {
    & .ant-radio-button-wrapper-checked:first-child{
      border: 3px solid #7f0019;
    }
  }
}
`;

const RadioRow = styled(Row)``;

const RadioCol = styled(Col)`
  & {
    margin: 0;
  }
  & .ant-radio-button-wrapper {
    padding: 0;
  }
`;

const StyledA = styled.a`
  font-size: 12px;
  color: #67affd;
`;

const DonationTicketButton = styled(LargeButton)`
  padding: 6px 22px;
  margin: 30px 0 230px 0;
  width: 80px;
  height: 27px;
  font-size: 12px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 50px;
  color: #9a9a9a;
  display: block;
  &:hover {
    color: #9a9a9a;
  }
`;

const SnsButtons = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 50px;

  li {
    padding: 1px 8px 1px 6px;
    position: relative;
    height: 20px;
    box-sizing: border-box;
    color: #fff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
  }
`;

const TwitterButton = styled(Button)`
  background: #00aced;
  border: 1px solid #00aced;
  height: 20px;
  padding: 1px 8px 1px 6px;
  font-size: 11px;

  &:hover {
    background-color: #0c7abf;
  }
`;

const FacebookButton = styled(Button)`
  background: #4267b2;
  border: 1px solid #4267b2;
  height: 20px;
  padding: 1px 8px 1px 6px;
  font-size: 11px;

  &:hover {
    background-color: #0c7abf;
  }
`;

const TotalGood = styled.span`
  padding-left: 5px;
`;

const TotalDonationWrapper = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;

  span{
    &:nth-child(3){
    margin-right: 40px;
  }
  &:nth-child(6){
    margin-right: 20px;
  }
`;

const TotalDonationSpan = styled.span`
  font-size: 19px;
  font-weight: bold;
`;

const StyledTotalDonationSpan = styled.span`
  font-size: 11px;
  vertical-align: bottom;
`;

class Form extends Component {
  state = {
    entity: this.props.entity
  };

  updateEntity = (keyName, value) => {
    const entity = {
      ...this.state.entity,
      [keyName]: value
    };
    this.setState({ entity });
  };

  submit = () => {
    this.props.requestHandler(this.state.entity);
  };

  render() {
    const { entity } = this.props;
    return (
      <div>
        <AntdForm>
          <Row type="flex">
            <ImgCol span={13}>
              <MainImage src={entity.img} />
            </ImgCol>

            <FormCol span={11}>
              <h2>
                {entity.title}
                <br />
                <span>{entity.ten_bill}</span>
                <br />
                <span>{entity.organization}</span>
              </h2>

              <div>
                <StyledSpan>{entity.sub_description}</StyledSpan>
                <br />
                <ul>
                  <li class="selected">
                    <IntlMessages id="donationShow.note1" />
                    <br />
                    <IntlMessages id="donationShow.note2" />
                    <br />
                    <IntlMessages id="donationShow.note3" />
                  </li>
                </ul>
              </div>

              <div class="price">
                <IntlMessages id="donationShow.unit" />
                <PriceSpan>
                  <NeckPrice>{entity.price}</NeckPrice>
                </PriceSpan>
                <IntlMessages id="donationShow.yen" />
              </div>

              <FormItem label="種類" colon={false}>
                <RadioGroup>
                  <RadioRow>
                    <RadioCol span={11}>
                      <RadioButton value="a">
                        <IntlMessages id="donationShow.unit" />
                        <br />
                        <IntlMessages id="donationShow.ten" />
                        <IntlMessages id="donationShow.yen" />
                      </RadioButton>
                    </RadioCol>

                    <RadioCol span={11} offset={2}>
                      <RadioButton value="b">
                        <IntlMessages id="donationShow.unit" />
                        <br />
                        <IntlMessages id="donationShow.hundred" />
                        <IntlMessages id="donationShow.yen" />
                      </RadioButton>
                    </RadioCol>
                  </RadioRow>
                </RadioGroup>

                <div>
                  <Quantity>
                    <IntlMessages id="donationShow.unitCount" />
                    <StyledSelect defaultValue="1">
                      <Option value="1">1</Option>
                    </StyledSelect>
                  </Quantity>
                  <DonationButton>
                    <IntlMessages id="donationShow.donate" />
                  </DonationButton>
                </div>
              </FormItem>

              <div>
                <Popover trigger="click">
                  <StyledA>
                    <IntlMessages id="donationShow.userGuide" />
                  </StyledA>
                </Popover>
              </div>

              <Link to="/store/cmdty/donation/" key="01">
                <DonationTicketButton>
                  <IntlMessages id="donationShow.ticket" />
                </DonationTicketButton>
              </Link>

              <SnsButtons>
                <li>
                  <TwitterButton type="primary" size="small" icon="twitter">
                    <IntlMessages id="donationShow.twitter" />
                  </TwitterButton>
                </li>
                <li>
                  <FacebookButton type="primary" size="small" icon="like">
                    <IntlMessages id="donationShow.fb" />
                    <TotalGood>{entity.total_good}</TotalGood>
                  </FacebookButton>
                </li>
              </SnsButtons>
            </FormCol>
          </Row>

          <TotalDonationWrapper>
            <IntlMessages id="donationShow.total" />
            <TotalDonationSpan>{entity.total}</TotalDonationSpan>
            <IntlMessages id="donationShow.yen" />

            <IntlMessages id="donationShow.donationPeople" />
            <TotalDonationSpan>{entity.total_people}</TotalDonationSpan>
            <IntlMessages id="donationShow.people" />
            <StyledTotalDonationSpan>
              <IntlMessages id="donationShow.current" values={{ time: 16 }} />
            </StyledTotalDonationSpan>
          </TotalDonationWrapper>

          <Organization
            title={entity.organization}
            organizations={entity.organizations}
          />
          <Activity activities={entity.activities} />
          <Message messages={entity.messages} />
          <OtherDonation />
          <Guide />
          <Row>
            <Col span={12}>
              <Link to="/store/cmdty/donation">前のページに戻る</Link>
            </Col>
            <Col span={12}>
              <div>次へ進む</div>
            </Col>
          </Row>
        </AntdForm>
      </div>
    );
  }
}

export default Form;
