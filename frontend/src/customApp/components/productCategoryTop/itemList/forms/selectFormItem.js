import React from "react";
import styled from "styled-components";
import { Form, Select } from "antd";
import IntlMessages from "../../../../../components/utility/intlMessages";

const StyledSelectFormItem = styled(Form.Item)`
  && {
    display: flex;
    border-bottom: 1px solid #bebebe;
    justify-content: space-between;
    .ant-select-selection {
      border: none;
    }
    &.ant-row {
      :before,
      :after {
        content: none;
      }
    }
  }
`;

const SelectFormItem = ({ keyName, value, handleChange, options }) => (
  <StyledSelectFormItem
    colon={false}
    label={<IntlMessages id={`productCategoryTop.attributes.${keyName}`} />}
  >
    <Select
      value={value}
      onChange={changeValue => handleChange(keyName, changeValue)}
    >
      {options.map((option, index) => (
        <Select.Option value={option.value} key={index}>
          <IntlMessages
            id={`productCategoryTop.attributes.${keyName}.option.${option.id}`}
          />
        </Select.Option>
      ))}
    </Select>
  </StyledSelectFormItem>
);

export default SelectFormItem;
