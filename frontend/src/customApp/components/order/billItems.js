import React,{Component} from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Radio, Input, Checkbox  } from 'antd';
import {Link} from "react-router-dom";

const BillContent = styled.div`
  padding: 16px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const BillTitles = styled.h2`
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
`;

const DetailLink = styled.span`
  margin-left: 16px;
  font-size: 12px;
`;

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};

const InputStyle = {
  width: '100px',
  marginLeft: '10px'
};

const RadioGroup = Radio.Group;

class BillItems extends Component{
  constructor(props){
    super(props)
    this.state={
      value: 1
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render(){
    const {
      title,
      labelName,
      usedBy,
      useItemUnit
    } = this.props;
    return(
      <BillContent>
        <div>
          <BillTitles>
            {title}
          </BillTitles>
          <Link to="#">
            <DetailLink>
              <IntlMessages id="order.procedure.detail" />
            </DetailLink>
          </Link>
        </div>
        <div>
          <Checkbox onChange={console.log("billItems.js onChange checked")}>
            <IntlMessages id={labelName}/><br />
            <IntlMessages id="order.procedure.leftBracket" />
            <IntlMessages id={usedBy}/>
              <span>3000</span>
            <IntlMessages id={useItemUnit}/>
            <IntlMessages id="order.procedure.rightBracket" />
          </Checkbox>
        </div>
        <div>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              <IntlMessages id="order.procedure.useAll"/>
            </Radio>
            <Radio style={radioStyle} value={2}>
              <IntlMessages id="order.procedure.usePart"/>
              {
                this.state.value === 2 ?
                <Input style={InputStyle} />:
                <Input style={InputStyle} disabled/>
              }
            </Radio>
          </RadioGroup>
        </div>
    </BillContent>
    );
  }
}

export default BillItems;