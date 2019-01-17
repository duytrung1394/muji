import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

const SizeList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const SizeItem = styled.li`
  max-width: 80px;
  flex: 2;
`;

const Input = styled.input`
  display: none;
  &:checked {
    border: #333;
  }
`;

const StyledLabel = styled.label`
  width: 70%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  display: inline-block;
  padding: 5px 0;
  cursor: pointer;
  border: 1px solid #e5e5e5;
`;

const Size = ({ select, sizeList }) => {
  return (
    <div>
      <p>
        <IntlMessages id="productDetail.size" />
      </p>
      <SizeList>
        {sizeList.map((size, index) => {
          return (
            <SizeItem key={index}>
              <Input id="bar1" type="radio" value={size.value} />
              <StyledLabel for="bar1">{size.title}</StyledLabel>
            </SizeItem>
          );
        })}
      </SizeList>
    </div>
  );
};

export default Size;
