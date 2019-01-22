import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReportForm from "../../components/customerReview/commentReport/reportForm";
import ReportItem from "../../components/customerReview/commentReport/reportItem";
import ReportNotes from "../../components/customerReview/commentReport/reportNotes";
import ReportButton from "../../components/customerReview/commentReport/reportButton";

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

const BoldMessage = styled.p`
  font-weight: bold;
  color: #333;
  margin-bottom: 0;
`;

class Report extends Component {
  componentDidMount() {
    this.props.getReport(
      `${this.props.match.params.item_code}/${
        this.props.match.params.comment_code
      }`
    );
  }

  render() {
    const { entity } = this.props;
    return (
      <ContentAreaLayout>
        <HeadLayout>
          <Title>
            <IntlMessages
              id="customerReview.commentReport.title"
              style={BoldMessage}
            />
          </Title>
          <IntlMessages id="customerReview.commentReport.note1" />
          <BoldMessage>
            <IntlMessages id="customerReview.commentReport.note2" />
          </BoldMessage>
        </HeadLayout>
        <MainLayout>
          <ReportForm />
          <ReportItem entity={entity} />
          <ReportNotes />
          <ReportButton />
        </MainLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
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

export default enhance(Report);
