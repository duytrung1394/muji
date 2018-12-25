import React from "react";
import { Radio, Input } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Form = styled.form`
  margin: 0;
`;

const BoldSpan = styled.span`
  color: #333;
  font-weight: bold;
`;

const ChooseSpan = styled.span`
  line-height: 3;
`;

const RadioGroup = Radio.Group;

const StyledRadio = styled(Radio)`
  && {
    display: block;
  }
`;

const ContentInput = styled.div`
  margin: 20px 0;
`;

const ContentInputTitle = styled.span`
  color: #333;
  font-weight: bold;
  line-height: 2;
`;

const { TextArea } = Input;

const ReportForm = () => {
  return (
    <Form>
      <BoldSpan>
        <IntlMessages id="customerReview.commentReport.violation_items" />
      </BoldSpan>
      <br />
      <ChooseSpan>
        <IntlMessages id="customerReview.commentReport.violation_items_note" />
      </ChooseSpan>
      <br />
      <RadioGroup>
        <StyledRadio value={1}>
          <IntlMessages id="customerReview.commentReport.radioItem1" />
        </StyledRadio>
        <StyledRadio value={2}>
          <IntlMessages id="customerReview.commentReport.radioItem2" />
        </StyledRadio>
        <StyledRadio value={3}>
          <IntlMessages id="customerReview.commentReport.radioItem3" />
        </StyledRadio>
        <StyledRadio value={4}>
          <IntlMessages id="customerReview.commentReport.radioItem4" />
        </StyledRadio>
        <StyledRadio value={5}>
          <IntlMessages id="customerReview.commentReport.radioItem5" />
        </StyledRadio>
        <StyledRadio value={6}>
          <IntlMessages id="customerReview.commentReport.radioItem6" />
        </StyledRadio>
        <StyledRadio value={7}>
          <IntlMessages id="customerReview.commentReport.radioItem7" />
        </StyledRadio>
      </RadioGroup>
      <ContentInput>
        <ContentInputTitle>
          <IntlMessages id="customerReview.commentReport.violation_detail" />
        </ContentInputTitle>
        <TextArea
          placeholder={"出来るだけ詳しく、ご入力ください。(1,000文字以内)"}
          rows={4}
        />
      </ContentInput>
    </Form>
  );
};

export default ReportForm;
