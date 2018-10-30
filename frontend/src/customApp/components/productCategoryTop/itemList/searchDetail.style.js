import styled from "styled-components";
import { Form, Button } from "antd";

export const searchLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12
};

export const SearchDetailForm = styled(Form)`
  && {
    margin-top: 20px;
    border-top: 1px solid #ebebeb;
    padding-top: 20px;
  }
`;

export const StyledSelectFormItem = styled(Form.Item)`
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

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SearchButton = styled(Button)`
  && {
    height: 40px;
    padding: 0 40px;
    border-radius: 50px;
    color: white;
    background: #383838;
    font-size: 13px;
    :hover {
      background: #050505;
      color: #f2f2f2;
    }
  }
`;

