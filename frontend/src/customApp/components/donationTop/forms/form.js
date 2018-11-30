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

const formItemLayout = {
  labelCol: {
    span: 12
  },
  wrapperCol: {
    span: 12
  }
};

const ImgCol = styled(Col)`

`
const FormCol = styled(Col)`
  width:45%;
`
const SNSUl = styled.ul`
  list-style:none;
  display:flex;
  justify-content: flex-end;
`

const TotalDonationWrapper = styled.div`
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  text-align:center;
  margin-bottom:30px;
`

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
            <ImgCol>
            <img src={entity.img}/>
            </ImgCol>
            <FormCol>
              <h2>{entity.title}<br/>{entity.organization}</h2>
              <p>{entity.reason}</p>
              <div>
                <IntlMessages id="donationShow.note1"/><br/>
                <IntlMessages id="donationShow.note2"/><br/>
                <IntlMessages id="donationShow.note3"/>
              </div>
              <IntlMessages id="donationShow.unit"/>
              10
              <IntlMessages id="donationShow.yen"/>
              <AntdForm.Item label="種類" colon={false} {...formItemLayout}>
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
                <InputGroup compact>
                  <IntlMessages id="donationShow.unitCount"/>
                  <Select defaultValue={1}>
                    <Option value={1}>1</Option>
                  </Select>
                </InputGroup>
                <Button type="primary">
                  <IntlMessages id="donationShow.donate"/>
                </Button>
              </AntdForm.Item>
              <Popover trigger="click">
                <a>
                  <IntlMessages id="donationShow.userGuide"/>
                </a>
              </Popover>
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
            <div>
              {entity.fundraising_description}
            </div>
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
          <OtherDonation
          otherDonations={entity.other_donations}
          />
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
