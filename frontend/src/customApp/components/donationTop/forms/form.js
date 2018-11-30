import React, { Component } from "react";
import { Row, Col, Input, Form as AntdForm, Radio,Select,Button,Popover} from "antd";
import { Link } from "react-router-dom";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import Organization from "./organization";
import Activity from "./card";
import Message from "./message";
import OtherDonation from "./otherDonation";
import Guide from "./guide";

const InputGroup = Input.Group;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const ImgCol = styled(Col)`
  margin: 0 40px 20px 0;
`;

const FormCol = styled(Col)`
  h2 {
    font-size: 19px;
    font-weight: normal;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  p {
    line-height: 1.6;
    color: #666;
    font-size: 13px;
    margin: 0;
  }

  div {
    font-size: 11px;
    color: #555;
    margin-top: 10px;
  }

  styledDiv {
    font-size: 11px;
  }

  tenDiv {
    font-size: 23px;
  }
  
  .ant-form-item-label label {
    font-size: 12px;
  }

  ddiv {
    font-size: 12px;
    color: #67affd;
    font-weight: bold; 
  }
` ;

const SNSUl = styled.ul`
  list-style:none;
  display:flex;
  justify-content: flex-end;
`;

const TotalDonationWrapper = styled.div`
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  text-align:center;
  margin-bottom:30px;
`;

class Form extends Component {
  state = {
    entity: this.props.entity,

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
          <Row type="flex" >
            <ImgCol span={12}>
              <img src={entity.img}/>
            </ImgCol>
            <FormCol span={11}>
              <h2>{entity.title}<br/>{entity.ten_bill}<br/>{entity.one_hundred_bill}<br/>{entity.organization}</h2>
              <p>{entity.reason}</p>
              <div>
                <IntlMessages id="donationShow.note1"/><br/>
                <IntlMessages id="donationShow.note2"/><br/>
                <IntlMessages id="donationShow.note3"/>
              </div>
              <styledDiv>
                <IntlMessages id="donationShow.unit"/>
              </styledDiv>
              <tenDiv>
                10
              </tenDiv>
              <styledDiv>              
                <IntlMessages id="donationShow.yen"/>
              </styledDiv>
              <AntdForm.Item label="種類" colon={false}>
                <RadioGroup>
                    <RadioButton value="a">
                      <IntlMessages id="donationShow.unit"/>
                      10
                      <IntlMessages id="donationShow.yen"/>
                    </RadioButton>
                  <RadioButton value="b">
                    <IntlMessages id="donationShow.unit"/>
                    100
                    <IntlMessages id="donationShow.yen"/>
                  </RadioButton>
                </RadioGroup>
                <IntlMessages id="donationShow.unitCount"/>
                <InputGroup compact>
                  <Select defaultValue={1}>
                    <Option value={1}>1</Option>
                    <Option value={1}>2</Option>
                  </Select>
                </InputGroup>
                <Button type="primary">
                  <IntlMessages id="donationShow.donate"/>
                </Button>
              </AntdForm.Item>
              <div>
                <Popover trigger="click">
                <a>
                  <IntlMessages id="donationShow.userGuide"/>
                </a>
                </Popover>
              </div>
              <Link to="/store/cmdty/donation/" key="01">
                <Button>
                  <IntlMessages id="donationShow.ticket"/>
                </Button>
              </Link>
              </FormCol>
          </Row>
          <SNSUl>
            <li>
              <Button type="primary" size="small" icon="twitter">
                <IntlMessages id="donationShow.twitter"/>
              </Button>
            </li>
            <li>
              <Button type="primary" size="small" icon="like">
                <IntlMessages id="donationShow.fb"/>
              </Button>
            </li>
          </SNSUl>
          <TotalDonationWrapper>
            <IntlMessages id="donationShow.total"/>
            <span>{entity.total}</span>
            <IntlMessages id="donationShow.yen"/>
            <IntlMessages id="donationShow.donationPeople"/>
            <span>{entity.total_people}</span>
            <IntlMessages id="donationShow.people"/>
            <IntlMessages id="donationShow.current" values={{time : 16}} />
            <ddiv>
              {entity.fundraising_description}
            </ddiv>
          </TotalDonationWrapper>
          <Organization
           title={entity.organization}
           organizations={entity.organizations}
          />
          <Activity
          activities={entity.activities}
          />
          <Message
          messages={entity.messages}
          />
          <OtherDonation/>
          <Guide/>
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
