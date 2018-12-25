import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const CommentsReportContent = styled.div`
  margin-bottom: 10px;
`;

const CommentsReportContentTitle = styled.span`
  color: #333;
  font-weight: bold;
  line-height: 2;
`;

const CommentsReportData = styled.div`
  border: 1px solid #eaeaea;
  padding: 10px;
`;

const CommentsReportDataHead = styled.div`
  margin-bottom: 10px;
`;

const ItemImg = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

const ItemDescription = styled.div`
  border-top: 1px solid #eaeaea;
  padding-top: 5px;
  overflow: hidden;
`;

const Description = styled.p`
  margin: 10px 0 0 0;
`;

const Date = styled.span`
  font-size: 12px;
  float: right;
`;

const ReportItem = ({ entities }) => {
  return (
    <CommentsReportContent>
      <CommentsReportContentTitle>
        <IntlMessages id="customerReview.commentReport.violation_content" />
      </CommentsReportContentTitle>
      <CommentsReportData>
        <CommentsReportDataHead>
          <ItemImg
            src={`https://img.muji.net/img/item/${entities.jancode}_180.jpg`}
          />
          <CommentsReportContentTitle>
            {entities.product}
          </CommentsReportContentTitle>
        </CommentsReportDataHead>
        <ItemDescription>
          <Description>{entities.detail_comment}</Description>
          <Date>{entities.upload_date}</Date>
        </ItemDescription>
      </CommentsReportData>
    </CommentsReportContent>
  );
};

export default ReportItem;
