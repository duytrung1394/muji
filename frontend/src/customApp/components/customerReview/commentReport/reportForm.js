import React from "react";
import { Radio, Input } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Form = styled.form`
  margin: 0;
`;

const FormTitle = styled.p`
  color: #333;
  font-weight: bold;
  margin-bottom: 0;
`;

const ChooseMessage = styled.p`
  line-height: 3;
  margin-bottom: 0;
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
      <FormTitle>
        <IntlMessages id="customerReview.commentReport.violation_items" />
      </FormTitle>
      <ChooseMessage>
        <IntlMessages id="customerReview.commentReport.violation_items_note" />
      </ChooseMessage>
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
          placeholder={"???????????????????????????????????????????????????(1,000????????????)"}
          rows={4}
        />
      </ContentInput>
    </Form>
  );
};

export default ReportForm;
