import React, { Component } from "react";
import { Row, Col, Form as AntdForm, Select, Button, Popover } from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import LargeButton from "../../form/largeButton";
import RadioGroup from "./radioGroup";

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

const StyledA = styled.a`
  font-size: 12px;
  color: #67affd;
`;

const DonationTicketButton = styled(LargeButton)`
  padding: 6px 22px;
  margin: 30px 0 230px 0;
  width: 90px;
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
    // TODO: this.state.entity.numberOfUnits...
    const numberOfUnits = 3;
    this.props.requestHandler(numberOfUnits);
  };

  render() {
    const { entity } = this.props;
    return (
      <div>
        <Row type="flex">
          <ImgCol span={13}>
            <MainImage src={entity.img} />
          </ImgCol>

          <FormCol span={11}>
            <AntdForm>
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
                  <li className="selected">
                    <IntlMessages id="donationShow.note1" />
                    <br />
                    <IntlMessages id="donationShow.note2" />
                    <br />
                    <IntlMessages id="donationShow.note3" />
                  </li>
                </ul>
              </div>

              <div className="price">
                <IntlMessages id="donationShow.unit" />
                <PriceSpan>
                  <NeckPrice>{entity.price}</NeckPrice>
                </PriceSpan>
                <IntlMessages id="donationShow.yen" />
              </div>

              <FormItem label="種類" colon={false}>
                <RadioGroup />

                <div>
                  <Quantity>
                    <IntlMessages id="donationShow.unitCount" />
                    <StyledSelect defaultValue="1">
                      <Option value="1">1</Option>
                    </StyledSelect>
                  </Quantity>
                  <DonationButton onClick={this.submit}>
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
            </AntdForm>
          </FormCol>
        </Row>
      </div>
    );
  }
}

export default Form;
