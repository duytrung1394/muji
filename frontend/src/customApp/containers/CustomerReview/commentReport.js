import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReportForm from "../../components/customerReview/list/reportForm";
import ReportItem from "../../components/customerReview/list/reportItem";
import ReportNotes from "../../components/customerReview/list/reportNotes";
import ReportButton from "../../components/customerReview/list/reportButton";

const ContentLayout = styled(BaseContentLayout)`
  padding-top: 40px;
  max-width: 768px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const HeadLayout = styled(ContentLayout)`
  margin: 0 auto;
`;

const MainLayout = styled(ContentLayout)`
  background-color: #f7f7f7;
  padding: 20px;
  margin: 0 auto 100px auto;
`;

const BoldSpan = styled.span`
  font-weight: bold;
  color: #333;
`;

class CommentReport extends Component {
  componentDidMount() {
    this.props.getReport(
      `${this.props.match.params.item_code}/${
        this.props.match.params.comment_code
      }`
    );
  }

  render() {
    const { entities } = this.props;
    console.log(entities);
    return (
      <ContentAreaLayout>
        <HeadLayout>
          <Title>
            <IntlMessages
              id="customerReview.commentReport.title"
              style={BoldSpan}
            />
          </Title>
          <IntlMessages id="customerReview.commentReport.note1" />
          <br />
          <BoldSpan>
            <IntlMessages id="customerReview.commentReport.note2" />
          </BoldSpan>
        </HeadLayout>
        <MainLayout>
          <ReportForm />
          <ReportItem entities={entities} />
          <ReportNotes />
          <ReportButton />
        </MainLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.List.toJS();
};

const actionCreators = {
  getReport: actions.getReport.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(CommentReport);
