import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import { Checkbox, Select } from 'antd';

const GiftWrapper = styled.div`
  padding: 16px;
  margin-top: 30px;
  background-color: #F2F2F2;
`;

const GiftStyle = styled.div`
  padding: 16px;
  background-color: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(153, 153, 153, 0.5);
`;

const Title = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: rgb(88, 88, 88);
  margin-bottom: 0;
`;

const GiftCheckboxtWrapper = styled.div`
  margin: 20px 0;
`;

const GiftCheckbox = styled(Checkbox)`
  && {
    font-size: 13px;
  }
  .ant-checkbox-inner {
    border: 2px solid #999;
  }
  .ant-checkbox-checked {
    border: 2px solid #7f0119;
  }
`;

const GiftSelect = styled(Select)`
`;

const Option = Select.Option;

const handleChange = (value)=>{
  console.log(`selected ${value}`);
};

const Gift = () => {
  return (
    <GiftWrapper>
      <GiftStyle>
        <Title>
          ギフト包装
        </Title>
        <GiftCheckboxtWrapper>
          <GiftCheckbox>ギフト包装を利用する（162円）</GiftCheckbox>
        </GiftCheckboxtWrapper>
        <GiftSelect
          style={{ width: 250 }}
          onChange={handleChange}
        >
          <Option value="まとめて包装する">まとめて包装する</Option>
          <Option value="個々に包装する">個々に包装する</Option>
        </GiftSelect><p />
        のし：指定なし　メッセージ：指定なし<p />
        【のし・メッセージの指定　ボタン】
      </GiftStyle>
    </GiftWrapper>
  );
};

export default Gift;