import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const NotesTitle = styled.span`
  color: #333;
  font-size: 13px;
  font-weight: bold;
  line-height: 2.5;
`;

const Notes = styled.div``;

const ReportNotes = () => {
  return (
    <div>
      <NotesTitle>
        <IntlMessages id="customerReview.commentReport.violation_notes" />
      </NotesTitle>
      <Notes>
        <IntlMessages id="customerReview.commentReport.violation_note1" />
        <br />
        <IntlMessages id="customerReview.commentReport.violation_note2" />
        <br />
        <IntlMessages id="customerReview.commentReport.violation_note3" />
      </Notes>
    </div>
  );
};

export default ReportNotes;
