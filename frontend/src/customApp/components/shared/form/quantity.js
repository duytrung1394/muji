import React, { Component } from "react";
import styled from "styled-components";

const QuantityBox = styled.div`
  display: flex;
`;

const QuantityButton = styled.div`
  line-height: 40px;
  width: 40px;
  background-color: #e5e5e5;
  box-shadow: none;
  text-align: center;
  user-select: none;
  font-weight: bold;
  cursor: pointer;
`;

const Sum = styled.input`
  width: 72px;
  height: 40px;
  line-height: 50px;
  margin: 0 16px;
  text-align: center;
`;

const CommonButton = ({ value, action }) => {
  return <QuantityButton onClick={action}>{value}</QuantityButton>;
};

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: this.props.value ? this.props.value : 0,
      min: this.props.min ? this.props.min : 0,
      max: this.props.max ? this.props.max : Infinity,
    };
  }
  plus = () => {
    if (this.state.sum < this.state.max) {
      this.setState({ sum: this.state.sum + 1 });
    }
    null;
  };
  minus = () => {
    if (this.state.sum > this.state.min) {
      this.setState({ sum: this.state.sum - 1 });
    }
    null;
  };
  changeHundler =(e)=>{
    this.setState({ sum: Number(e.target.value)})
  };
  render() {
    return (
      <QuantityBox>
        <CommonButton value="-" action={this.minus} />
        <Sum value={this.state.sum} onChange={this.changeHundler} />
        <CommonButton value="+" action={this.plus} />
      </QuantityBox>
    );
  }
}
export default Quantity;
