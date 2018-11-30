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

const MainImage = styled.img`
  width:100%;
  height:auto;
  max-width:720px;
  ma-height:720px;
`;

const ImgCol = styled(Col)`
`;

const FormCol = styled(Col)`
  && {
    padding: 0 40px;
  }
` ;

const StyledSelect = styled(Select)`
  display:
`

const Quantity = styled.div`
  display:inline-block;
`;

const RadioGroup = styled(Radio.Group)`
  width:100%;
`;

const RadioButton = styled(Radio.Button)`
  height:50px;
  width:100%;
  max-width:180px;
  text-align:center;
  span{
    height:10px;
  }
`;

const RadioRow = styled(Row)`
  
`

const RadioCol = styled(Col)`
& {
  margin:0;
}
  & .ant-radio-button-wrapper{
    padding:0
  };
`

const SnsButtons = styled.ul`
  list-style:none;
  display:flex;
  padding:0;
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

            <ImgCol span={13}>
              <MainImage src={entity.img}/>
            </ImgCol>

            <FormCol span={11}>

              <h2>
                {entity.title}
                <br/>
                <span>{entity.ten_bill}</span>
                <br/>
                <span>{entity.organization}</span>
              </h2>
                
              <div>
                <span>{entity.sub_description}</span><br/>
                <IntlMessages id="donationShow.note1"/><br/>
                <IntlMessages id="donationShow.note2"/><br/>
                <IntlMessages id="donationShow.note3"/>
              </div>

              <span>{entity.price}</span>
              
              <AntdForm.Item label="種類" colon={false}>

              <RadioGroup>
                <RadioRow>
                  <RadioCol span={11}>
                    <RadioButton value="a">
                      <IntlMessages id="donationShow.unit"/>
                      <br/>
                      <IntlMessages id="donationShow.ten"/>
                    </RadioButton>
                  </RadioCol>

                  <RadioCol span={11} offset={2}>
                    <RadioButton value="b">
                      <IntlMessages id="donationShow.unit"/>
                      <br/>
                      <IntlMessages id="donationShow.hundred"/>
                    </RadioButton>
                  </RadioCol>
                </RadioRow>
              </RadioGroup>

                <div>
                  <Quantity>
                    <IntlMessages id="donationShow.unitCount"/>
                    <StyledSelect defaultValue="1">
                      <Option value="1">1</Option>
                    </StyledSelect>
                  </Quantity>
                  <Button type="primary">
                    <IntlMessages id="donationShow.donate"/>
                  </Button>
                </div>
                

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

              <SnsButtons>
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
              </SnsButtons>

              </FormCol>
          </Row>


          <TotalDonationWrapper>
            <IntlMessages id="donationShow.total"/>
            <span>{entity.total}</span>
            <IntlMessages id="donationShow.yen"/>
            {" "}
            <IntlMessages id="donationShow.donationPeople"/>
            <span>{entity.total_people}</span>
            <IntlMessages id="donationShow.people"/>
            <IntlMessages id="donationShow.current" values={{time : 16}} />
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
